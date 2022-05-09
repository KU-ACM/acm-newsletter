const prepend = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <title>KU ACM NEWSLETTER</title>
    <script defer="" src="/static/js/bundle.js"></script>
    <style>
      * {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
    </style>
    <style>
      .acm-button {
        cursor: pointer;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        background-color: #cc0b0b;
        box-shadow: 0 0 3px #00000030;
        padding: 10px 15px;
        border: 0;
        border-radius: 8px;
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
      }

      .acm-button:hover {
        background-color: #a81010;
      }

      .acm-button.acm-button-small {
        font-size: 16px;
        padding: 8px 15px;
      }

      .acm-button.acm-button-light {
        color: #282828;
        background-color: #f0f0f0;
      }

      .acm-button.acm-button-light:hover {
        background-color: #dedede;
      }

      .acm-navigation-container {
        background-color: #fdfdfd;
        box-shadow: 0 0 5px #00000030;
        padding: 10px 20px;
        gap: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .acm-navigation-container .acm-navigation-title {
        margin-right: auto;
        font-size: 20px;
        font-weight: 600;
      }
    </style>
    <style>
      .acm-editor-container {
        margin: 10px auto;
        max-width: 500px;
        padding: 10px;
      }

      .acm-editor-container .acm-editor-event-preview-container {
        display: flex;
        gap: 10px;
        width: 100%;
        overflow: scroll;
      }

      .acm-editor-event-preview-container .acm-editor-event-preview {
        display: flex;
        gap: 10px;
        background-color: #f0f0f0;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
        align-items: center;
        height: 30px;
        white-space: nowrap;
      }

      .acm-editor-event-preview .acm-editor-event-preview-title {
        font-size: 18px;
      }

      .acm-editor-event-preview .acm-editor-event-preview-delete-button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #cc0b0b;
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
        border-radius: 100%;
        margin: 5px;
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
      }

      .acm-editor-container .acm-editor-event-form-container {
        background-color: #f0f0f0;
        border-radius: 10px;
        padding: 10px;
        gap: 10px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
      }

      .acm-editor-event-form-container .acm-editor-event-form-title {
        font-size: 22px;
        font-weight: bold;
        margin: 10px 5px;
      }

      .acm-editor-event-form-container .acm-editor-event-form {
        display: flex;
        flex-direction: column;
      }

      .acm-editor-event-form textarea,
      .acm-editor-event-form input {
        border: 1px solid #dfdfdf;
        border-radius: 10px;
        padding: 10px;
        min-height: 20px;
        resize: vertical;
        margin-top: 10px;
        margin-bottom: 15px;
      }

      .acm-editor-event-form .acm-editor-event-form-label {
        font-size: 16px;
        margin-left: 5px;
      }
    </style>
    <style>
      .acm-card-container {
        background-color: #fff;
        border: 1px solid #dfdfdf;
        margin: 10px 0;
        border-radius: 10px;
        min-width: 300px;
        max-width: 500px;
      }
      
      .acm-card-container .acm-card-img {
        border-bottom: 1px solid #dfdfdf;
        border-radius: 10px 10px 0 0;
        width: 100%;
      }
      
      .acm-card-container .acm-card-header-container {
        padding: 10px 10px;
      }
      
      .acm-card-header-container .acm-card-header-dtv-container {
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 18px;
        color: #e50909;
        font-weight: 600;
        display: flex;
        flex-flow: row wrap;
        gap: 8px;
      }
      
      .acm-card-header-dtv-container .acm-card-header-dtv {
        border: 2px solid #e50909;
        padding: 3px 5px;
        border-radius: 6px;
      }
      
      
      .acm-card-header-container .acm-card-header-title {
        margin-top: 5px;
        font-size: 22px;
        line-height: 26px;
        font-weight: bold;
      }
      
      .acm-card-container .acm-card-details-container {
        padding: 10px 10px;
      }
      
      .acm-card-details-container .acm-card-details-description {
        font-size: 18px;
        line-height: 22px;
        min-height: 0;
        min-width: 0;
        color: #282828;
        text-align: justify;
        white-space: pre-wrap;
      }
      
      .acm-card-details-container .acm-card-details-cta {
        margin-top: 20px;
        width: 100%;
      }
      
    </style>
    <style>
      .acm-footer {
        background-color: #fff;
        border: 1px solid #dfdfdf;
        padding: 10px;
        margin: 10px 0;
        border-radius: 10px;
      }

      .acm-footer a {
        color: #000;
      }

      .acm-footer .acm-footer-title {
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        padding: 0 10px 10px;
      }

      .acm-footer .acm-social-icons-container {
        width: max-content;
        margin: 0 auto;
      }

      .acm-social-icons-container .acm-social-icon {
        color: #000;
        height: 32px;
        width: 32px;
        margin: 0 8px;
      }
    </style>
    <style>
      .acm-newsletter-container {
        margin: 10px auto;
        border-radius: 10px;
        padding: 10px;
        min-width: 300px;
        max-width: 500px;
      }

      .acm-newsletter-header {
        background-color: #fff;
        border: 1px solid #dfdfdf;
        padding: 10px 0;
        margin: 10px 0;
        border-radius: 10px;
        min-width: 300px;
        max-width: 500px;
      }

      .acm-newsletter-header .acm-newsletter-header-title {
        font-size: 42px;
        font-weight: bold;
        text-align: center;
        padding: 0 10px;
      }

      .acm-newsletter-header .acm-newsletter-header-date {
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        padding: 0 10px;
        color: #e50909;
      }
    </style>
  </head>
  <body>
    <div id="root">`;

const append = `</div></body></html>`;

export const getHtml = (content: string): string => {
  return prepend + content + append;
};
