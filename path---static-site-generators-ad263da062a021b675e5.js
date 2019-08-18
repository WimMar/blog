webpackJsonp([0xf095c5e53a2c],{690:function(e,t){e.exports={data:{post:{id:"C:/FILES/git/pers/blog/content/posts/2018-07-20--static-site-generators/index.md absPath of file >>> MarkdownRemark",html:'<p>These days there’s a plethora of static site generators. This blogpost describes what they are and when they can be used. By the way, this blog is deployed using the <a href="https://gatsby.com">Gatsby</a> static site generator, using Markdown for the content.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-cb2c2.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 666px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.07507507507508%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHOaZS1SYT/xAAbEAACAgMBAAAAAAAAAAAAAAABAgARAxITIf/aAAgBAQABBQLAnuetxRnQgFriMNf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAwEBPwFL/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BV//EABwQAAMAAgMBAAAAAAAAAAAAAAABEQJBEjFRcf/aAAgBAQAGPwLnpMeS7ULbfR46Ffgqj//EABoQAAIDAQEAAAAAAAAAAAAAAAERACFBMXH/2gAIAQEAAT8hOQE7JauBHYjUVijiFTmMo4BTYCJp9n//2gAMAwEAAgADAAAAELQP/8QAFxEAAwEAAAAAAAAAAAAAAAAAABEhcf/aAAgBAwEBPxBxGj//xAAXEQADAQAAAAAAAAAAAAAAAAAAESFx/9oACAECAQE/EFWZP//EABwQAQACAgMBAAAAAAAAAAAAAAERMQAhQVGBYf/aAAgBAQABPxCFhCldTfXeCC+xNlfawBgiR1Le45v1wAEgw3NZowUkNKX7jsANrj//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Warner Bros"\n        title=""\n        src="/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-cb2c2.jpg"\n        srcset="/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-c8d2d.jpg 200w,\n/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-6b0dd.jpg 400w,\n/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-cb2c2.jpg 666w"\n        sizes="(max-width: 666px) 100vw, 666px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>But… it’s only static?</h3>\n<p>The word static naturally brings along a negative connotation. But should it really? A static site delivers it’s content to the user exactly as it’s stored. As opposed to a dynamic website which either at the server side or the client side pull in information, allow more interaction etc. To avoid confusion, <em>static</em> does not mean <em>plain</em>. These websites can have fancy moving elements and a responsive design.</p>\n<h3>Comparison to CMS (Wordpress)</h3>\n<p>When you visit a WordPress (or Drupal or a different CMS), WordPress gets content from the database (SQL or noSQL), builds the page using a template,  and sends the complete HTML page back to your browser. The content to be displayed is “built” at that very moment.</p>\n<p>In contrast, a static site generator builds the pages in advance. When the developer launches the <em>build</em> command, it fetches data from different sources, applies the configured templates and returns the static files. They can then be hosted on a webserver (e.g. Apache, Nginx). And they allow you to easily set up your site/blog/documentation on a <strong>simple server</strong>, without even the need for a database. They also allow a lot of <strong>flexibility</strong> in terms of static content resources.</p>\n<h3>Static content</h3>\n<p>Where and how do you define your static content? Anywhere.. It could be a local file on your computer, it can be a published article e.g. on medium (you don’t want to publish that content again, you want them linked), data in your Wordpress CMS, etc. The power of a static site generator truly becomes clear when combining many different resources.</p>\n<h3>Static site generators</h3>\n<p>There’s a plethora of static site generators, check out <a href="https://www.staticgen.com/">https://www.staticgen.com/</a> and get overwhelmed! Let’s consider generators which will make a website/blog. (There are e.g. also documentation-page generators, like the ones github will host for you) Some of the best known frameworks are:</p>\n<ul>\n<li><strong>Jekyll</strong> (Ruby)</li>\n<li><strong>Gatsby</strong> (React)</li>\n<li><strong>Hugo</strong> (Go)</li>\n<li><strong>Hexo</strong> (Node)</li>\n</ul>\n<p>These are all very viable solution. I didn’t try all of them so I will not go into comparison. There’s a few (small) reasons why I chose Gatsby. It caught my attention when I read and heard (in podcasts) about it a few times. I’d been wanting to get a bit more into react, so that ticked a box as well. When I checked out the Gatsby docs, and saw the rich integration possibilities, I was sold on trying it out. I’m only using Markdown for these blogposts though.</p>\n<h3>Gatsby, not your average SSG</h3>\n<p>These are some of the frameworks Gatsby integrates:</p>\n<ul>\n<li><strong>React</strong>: bring <strong>SPA</strong> (“single-page app”) features</li>\n<li><strong>GraphQL</strong>: for querying data from different resources</li>\n<li><strong>Webpack</strong>: JS bundling\nThe SPA which is generated might not fit the definition of a “static” site. But the content is static since it’s gathered and packed at build time.</li>\n</ul>\n<h3>How do I get started?</h3>\n<ol>\n<li>\n<p>If you haven’t yet, <a href="https://nodejs.org/en/download/package-manager/">install node</a></p>\n<blockquote>\n<p>Tip: use a package manager</p>\n</blockquote>\n</li>\n<li>Install the Gatsby CLI: <code class="language-text">npm install -g gatsby</code> or add it as a dependency to your project</li>\n<li>Look for a starter template that suits your purpose, <a href="https://www.gatsbyjs.org/docs/gatsby-starters/">here are some</a></li>\n<li>Clone the boilerplate, for example: <code class="language-text">gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog</code></li>\n</ol>\n<h3>Conclusion</h3>\n<p>You can have your blog up in no time with any of these website-generating frameworks. They allow alot of flexibility in terms of how/where you define your static content, and (by being static) require only a simple file-hosting server. These static sites don’t have to be “plain”/boring. They are designer friendly, you can go and tweak your layout. If you’re craving for some React development, I’d recommend trying Gatsby. If you prefer some “plain” JavaScript you can e.g. opt for Jekyll.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These days there’s a plethora of static site generators. This blogpost describes what they are and when they can be used. By the way, this blog is deployed using the "},{type:"element",tagName:"a",properties:{href:"https://gatsby.com"},children:[{type:"text",value:"Gatsby"}]},{type:"text",value:" static site generator, using Markdown for the content."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-cb2c2.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 666px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 75.07507507507508%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHOaZS1SYT/xAAbEAACAgMBAAAAAAAAAAAAAAABAgARAxITIf/aAAgBAQABBQLAnuetxRnQgFriMNf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAwEBPwFL/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BV//EABwQAAMAAgMBAAAAAAAAAAAAAAABEQJBEjFRcf/aAAgBAQAGPwLnpMeS7ULbfR46Ffgqj//EABoQAAIDAQEAAAAAAAAAAAAAAAERACFBMXH/2gAIAQEAAT8hOQE7JauBHYjUVijiFTmMo4BTYCJp9n//2gAMAwEAAgADAAAAELQP/8QAFxEAAwEAAAAAAAAAAAAAAAAAABEhcf/aAAgBAwEBPxBxGj//xAAXEQADAQAAAAAAAAAAAAAAAAAAESFx/9oACAECAQE/EFWZP//EABwQAQACAgMBAAAAAAAAAAAAAAERMQAhQVGBYf/aAAgBAQABPxCFhCldTfXeCC+xNlfawBgiR1Le45v1wAEgw3NZowUkNKX7jsANrj//2Q=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"Warner Bros",title:"",src:"/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-cb2c2.jpg",srcSet:["/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-c8d2d.jpg 200w","/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-6b0dd.jpg 400w","/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-cb2c2.jpg 666w"],sizes:["(max-width:","666px)","100vw,","666px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"But… it’s only static?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The word static naturally brings along a negative connotation. But should it really? A static site delivers it’s content to the user exactly as it’s stored. As opposed to a dynamic website which either at the server side or the client side pull in information, allow more interaction etc. To avoid confusion, "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"static"}]},{type:"text",value:" does not mean "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"plain"}]},{type:"text",value:". These websites can have fancy moving elements and a responsive design."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Comparison to CMS (Wordpress)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When you visit a WordPress (or Drupal or a different CMS), WordPress gets content from the database (SQL or noSQL), builds the page using a template,  and sends the complete HTML page back to your browser. The content to be displayed is “built” at that very moment."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In contrast, a static site generator builds the pages in advance. When the developer launches the "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"build"}]},{type:"text",value:" command, it fetches data from different sources, applies the configured templates and returns the static files. They can then be hosted on a webserver (e.g. Apache, Nginx). And they allow you to easily set up your site/blog/documentation on a "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"simple server"}]},{type:"text",value:", without even the need for a database. They also allow a lot of "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"flexibility"}]},{type:"text",value:" in terms of static content resources."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Static content"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Where and how do you define your static content? Anywhere.. It could be a local file on your computer, it can be a published article e.g. on medium (you don’t want to publish that content again, you want them linked), data in your Wordpress CMS, etc. The power of a static site generator truly becomes clear when combining many different resources."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Static site generators"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There’s a plethora of static site generators, check out "},{type:"element",tagName:"a",properties:{href:"https://www.staticgen.com/"},children:[{type:"text",value:"https://www.staticgen.com/"}]},{type:"text",value:" and get overwhelmed! Let’s consider generators which will make a website/blog. (There are e.g. also documentation-page generators, like the ones github will host for you) Some of the best known frameworks are:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Jekyll"}]},{type:"text",value:" (Ruby)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Gatsby"}]},{type:"text",value:" (React)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Hugo"}]},{type:"text",value:" (Go)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Hexo"}]},{type:"text",value:" (Node)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These are all very viable solution. I didn’t try all of them so I will not go into comparison. There’s a few (small) reasons why I chose Gatsby. It caught my attention when I read and heard (in podcasts) about it a few times. I’d been wanting to get a bit more into react, so that ticked a box as well. When I checked out the Gatsby docs, and saw the rich integration possibilities, I was sold on trying it out. I’m only using Markdown for these blogposts though."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Gatsby, not your average SSG"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These are some of the frameworks Gatsby integrates:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"React"}]},{type:"text",value:": bring "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"SPA"}]},{type:"text",value:" (“single-page app”) features"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"GraphQL"}]},{type:"text",value:": for querying data from different resources"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Webpack"}]},{type:"text",value:": JS bundling\nThe SPA which is generated might not fit the definition of a “static” site. But the content is static since it’s gathered and packed at build time."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"How do I get started?"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you haven’t yet, "},{type:"element",tagName:"a",properties:{href:"https://nodejs.org/en/download/package-manager/"},children:[{type:"text",value:"install node"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Tip: use a package manager"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Install the Gatsby CLI: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install -g gatsby"}]},{type:"text",value:" or add it as a dependency to your project"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Look for a starter template that suits your purpose, "},{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/docs/gatsby-starters/"},children:[{type:"text",value:"here are some"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Clone the boilerplate, for example: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Conclusion"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can have your blog up in no time with any of these website-generating frameworks. They allow alot of flexibility in terms of how/where you define your static content, and (by being static) require only a simple file-hosting server. These static sites don’t have to be “plain”/boring. They are designer friendly, you can go and tweak your layout. If you’re craving for some React development, I’d recommend trying Gatsby. If you prefer some “plain” JavaScript you can e.g. opt for Jekyll."}]}],data:{quirksMode:!1}},fields:{slug:"/static-site-generators/",prefix:"2018-07-20"},frontmatter:{title:"Static site generators",subTitle:"...And why I chose Gatsby for this blog",cover:{childImageSharp:{resize:{src:"/static/gatsby-32836b58764e8a242bdd0ec4baf832d8-ada8c.jpg"}}}}},author:{id:"C:/FILES/git/pers/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Wim M.</strong> Electrical engineer, computer programmer. I love prototyping, listening to science- and programming-related podcasts, etc.</p>"},footnote:{id:"C:/FILES/git/pers/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>Tech blog</li>\n<li>by <a href="https://www.wimmar.be">Wim Marynissen</a></li>\n<li><a href="https://www.wimmar.be/#contact">Contact me</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"411452336030178"}}}},pathContext:{slug:"/static-site-generators/"}}}});