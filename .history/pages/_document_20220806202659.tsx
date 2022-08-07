import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <meta name="Instagram:card" content="summary" />
          <meta
            name="Instagram:site"
            content="https://www.instagram.com/madisonopoly.wi/"
          />
          <meta
            name="twitter:site"
            content="https://twitter.com/madisonopolyy/"
          />
          <meta
            name="twitter:description"
            content="Ultimate UW Madison Board Game "
          />
          <meta name="twitter:title" content="Ultimate UW Madison Board Game" />
          <meta name="twitter:domain" content="https://madisonopoly.com" />
          <meta
            name="twitter:image"
            content="https://pbs.twimg.com/profile_images/1547632904687144963/EJFO_gGz_400x400.jpg"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            defer
            data-domain="madisonopoly.com"
            src="https://plausible.io/js/plausible.js"
          ></script>
          <script
            defer
            data-domain="madisonopoly.com"
            src="https://plausible.io/js/plausible.js"
          ></script>

          <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '722488198856849');
            fbq('track', 'PageView');
          </script>
          <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=722488198856849&ev=PageView&noscript=1"
          /></noscript>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Y6G8YVLTMP"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Y6G8YVLTMP');
          `,
            }}
          />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
          />
          {/* <!-- Start of HubSpot Embed Code --> */}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/22381508.js"
          ></script>
          {/* <!-- End of HubSpot Embed Code --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
