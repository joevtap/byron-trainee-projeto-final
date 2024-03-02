const markdownit = require("markdown-it");
const md = markdownit();

module.exports = {
  afterCreate: async (event) => {
    const subscriber = event.params.data;

    strapi.log.info("New subscriber: " + subscriber.email);

    const newsletter = await strapi.entityService.findMany(
      "api::newsletter.newsletter",
      {
        filters: {
          sent: true,
        },
        sort: { sentAt: "desc" },
      }
    );

    if (newsletter.length === 0) {
      strapi.log.info("No newsletter to send");
      return;
    }

    strapi.log.info("Sending newsletter to: " + subscriber.email);

    const emailTemplate = {
      subject: "<%= newsletter.subject %>",
      text: `<%= newsletter.content %>
        <%= newsletter.unsubscribeUrl %>
        `,
      html: `<!doctype html>
<html lang="und" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title></title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }

  </style>
  <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
  <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);

  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }

  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }

  </style>
  <style type="text/css">
    body {
      font-family: 'Inter', sans-serif;
    }

    a {
      font-style: italic;
      text-decoration: underline;
    }

    a:hover {
      color: #363636;
    }

    .markdown {
      font-family: 'Inter', sans-serif;
    }

    .markdown h1 {
      font-size: 28px;
      color: #171717;
      font-weight: bold;
      margin: 12px 0;
      padding: 0;
    }

    .markdown h2 {
      font-size: 24px;
      color: #171717;
      font-weight: bold;
      margin: 12px 0;
      padding: 0;
    }

    .markdown h3 {
      font-size: 20px;
      color: #171717;
      font-weight: bold;
      margin: 12px 0;
      padding: 0;
    }

    .markdown h4 {
      font-size: 18px;
      color: #171717;
      font-weight: bold;
      margin: 12px 0;
      padding: 0;
    }

    .markdown h5 {
      font-size: 16px;
      color: #171717;
      font-weight: bold;
      margin: 12px 0;
      padding: 0;
    }

    .markdown h6 {
      font-size: 14px;
      color: #171717;
      font-weight: bold;
      margin: 12px 0;
      padding: 0;
    }

    .markdown strong {
      font-weight: bold;
    }

    .markdown b {
      font-weight: bold;
    }

    .markdown em {
      font-style: italic;
    }

    .markdown p,
    li,
    a {
      font-size: 16px;
      color: #171717;
      margin: 8px 0;
      padding: 0;
    }

    .markdown a {
      font-style: italic;
      text-decoration: underline;
    }

    .markdown a:hover {
      color: #363636;
    }

  </style>
</head>

<body style="word-spacing:normal;">
  <div style="" lang="und" dir="auto">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="markdown-outlook" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix markdown" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody> <%= newsletter.content %> </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><a href="<%= newsletter.unsubscribeUrl %>" style="text-align: center; width: 100%; display:inline-block"> Cancelar inscrição </a></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>`,
    };

    await strapi.plugins["email"].services.email.sendTemplatedEmail(
      {
        to: subscriber.email,
      },
      emailTemplate,
      {
        newsletter: {
          subject: newsletter[0].subject,
          content: md.render(newsletter[0].content),
          unsubscribeUrl:
            process.env.FRONTEND_URI +
            `/newsletter/unsubscribe/${subscriber.identifier}?email=${subscriber.email}`,
        },
      }
    );
  },
};