"use client";
import React from "react";
import { ArrowLeft, ThumbsUp, Bookmark, Share2 } from "lucide-react";
import Link from "next/link";

export default function PostDetail() {
  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-10 px-4 md:px-8 mt-20">
      <div className="max-w-2xl mx-auto">
        {/* ========================================== */}
        {/* 1. TOP BAR / BACK BUTTON                   */}
        {/* ========================================== */}
        <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#BACCDE] hover:text-[#FB8122] dark:hover:text-[#FB8122] transition-colors mb-8 group">
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </button>

        {/* ========================================== */}
        {/* 2. POST HEADER                             */}
        {/* ========================================== */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-[41px] font-bold text-gray-900 dark:text-white leading-snug mb-2">
            11 Marketing Channels That Consistently Work for Founders
          </h1>
          <div className="flex items-center text-sm text-gray-600 dark:text-[#BACCDE] gap-2">
            <span className="opacity-90 text-icon">By</span>{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
              <Link href={"/user-detail"}>Darko Gjorgjievski</Link>
            </span>
            <span className="opacity-90 text-icon">•</span>
            <span className="opacity-90 text-icon">March 08, 2024</span>
          </div>
        </header>

        {/* ========================================== */}
        {/* 3. HERO IMAGE PLACEHOLDER                  */}
        {/* ========================================== */}
        <div className="w-full aspect-[16/9] md:aspect-[18/10] bg-gray-200 dark:bg-[#D9D9D9] rounded-4xl mb-10 overflow-hidden shadow-sm">
          {/* Replace this div with an actual <img /> tag when you have dynamic data */}
        </div>

        {/* ========================================== */}
        {/* 4. POST CONTENT                            */}
        {/* ========================================== */}
        <article className="prose prose-gray dark:prose-invert max-w-none text-icon text-base md:text-[14px] leading-relaxed mb-12 space-y-6">
          <p className="text-icon">
            I've analyzed all 497 founder interviews on Indie Hackers and
            uncovered the marketing channels that worked consistently for
            founders. After I finished my analysis, I started the User
            Acquisition Channels series to provide insights on each channel.
          </p>
          <p className="text-icon">
            This article will be a "hub article" of sorts that includes an
            overview of each marketing channel and a link to more detailed
            post(s) where you'll be able to learn more about each channel. I'll
            be updating this post on ongoing basis as I uncover new channels and
            strategies.
          </p>

          <h2 className="text-xl font-bold text-icon mt-10 mb-4">
            The Criteria
          </h2>
          <p className="mb-3">
            In order for a marketing channel to be in this list, I need to see 5
            or more founders talking about how it worked for them. All of the
            channels below fit this criteria.
          </p>
          <p className="mb-3">
            Ordering: The marketing channels below are ordered by the frequency
            of mentions. So far, most founders talked about SEO, so it's #1 in
            the list. Freelancing marketplaces are in the last place, because I
            saw the least amount of founders talking about it, etc.
          </p>
          <p>Without further ado, let's get started.</p>

          <h3 className="text-lg font-bold text-icon mt-8 mb-3">
            1. SEO (After Succeeding With Another Acquisition Channel)
          </h3>
          <p className="mb-2">
            SEO is a pretty saturated channel, and it usually takes months to
            start seeing decent traffic on Google.
          </p>
          <p className="mb-2">
            Most of the people who were successful with SEO tried used other
            acquisition channels first. Many founders also noticed that SEO
            success was often by accident. Take Snipcart ($100K/mo), for
            example:
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            In time, we realized our shaky, well-intentioned blogging was
            driving more and more organic traffic and even a few direct
            conversions. Especially our platform-specific e-commerce tutorials.
            So we decided to really own that channel.
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            2. Product Launch Platforms (Product Hunt, BetaList, etc.)
          </h3>
          <p className="mb-2">
            These are websites with millions of users that feature new products
            on a daily basis.
          </p>
          <p className="mb-2">
            Product Hunt/Beta List are the top 2 platforms (in terms of traffic)
            for tech founders. Product Hunt worked very well for many
            bootstrapped companies, and one of them was Standuply ($20k/mo):
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            We launched Standuply and related Slack bot products 8 times on
            Product Hunt in the latest 18 months. At first, it was our initial
            launch that brought in our very first users. It wasn’t that
            successful as we ended up in 7th place. However, it brought us 150
            teams.
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            3. App Exchanges / Marketplaces
          </h3>
          <p className="mb-2">
            Many huge platforms like Shopify, Slack and Salesforce have their
            own respective app stores. A surprising amount of founders had
            success being listed on them, like Finbarr from Shogun ($4.5k/mo), a
            drag-and-drop page builder:
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            When we launched on Shopify, sales began to trickle in and have been
            growing ever since. We've been attracting users in the Shopify app
            store from the beginning with very little marketing.
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            4. (sub)Reddit(s)
          </h3>
          <p className="mb-2">
            There are 100k+ active communities on Reddit. Chances are one - if
            not more than one - is related to your niche. Creative Tim
            ($118k/mo) sells UI kits/templates, and they've used these
            communities to successfully acquire users:
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            Most of our marketing strategies have been submitting our content to
            different communities like Reddit.. (Some important subreddits that
            work well in our area include /r/web_design, /r/html5, /r/frontend,
            and /r/webdev.)
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            5. Cold Email Outreach
          </h3>
          <p className="mb-2">
            This is simply reaching out to people you don't know yet via email
            and making them aware of your product or service.
          </p>
          <p className="mb-2">
            Cold email is a channel which is easy to get started with, but hard
            to master.
          </p>
          <p className="mb-2">
            What really helps is if your target prospects make their email
            addresses public. Take Web4Realty ($100K/mo), a tool to easily
            create real estate websites, and how they got their first
            customers):
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            We’re very lucky to be in an industry where gathering lead
            information is very easy. Fortunately for us, real estate agents
            plaster their emails and phone numbers all over the place, which is
            very convenient. Raza and I spent the first several months
            cold-calling leads, continuously collecting more email addresses and
            numbers, and sending individual marketing emails, one by one.
            Sometimes the client wanted a demo in real-life so we went and did
            it. We operated this way for a good 5–6 months, and grinded our way
            to about 200–300 paying users.
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            6. "Powered by" Marketing
          </h3>
          <p className="mb-2">
            You've probably visited a website, seen a live chat widget and a
            small "powered by Intercom/Drip/[insert live chat provider here]"
            link at the bottom of the widget.
          </p>
          <p className="mb-2">
            It turns out this is an amazing channel for getting new users from
            your existing users who publicly use your product.
          </p>
          <p className="mb-2">
            How does it work? A customer visits website A, sees a widget, sees
            that you're the provider of that widgets, checks you out, and starts
            using you.
          </p>
          <p className="mb-2">
            A good % of your users' users are also your users. Take LiveAgent
            ($250k/m), a help desk & live chat software, and how they got their
            users:
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            One of the friends was a local web hosting company. After they
            started using LiveAgent, we noticed that three out of four other
            leading local web hosting companies started using it as well, and
            they all continue to use it now. Word of mouth and branding
            displayed on our widgets such as "Live Chat Software by LiveAgent"
            were bringing in 50% of new leads…
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            7. Hacker News
          </h3>
          <p className="mb-2">
            A good % of founders who were interviewed in Indie Hackers targeted
            other devs and/or technical people on Hacker News. Take Qbserve
            ($2K/mo), a time tracking app for Mac, and how they got their first
            users:
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            I created a "Show HN" on Hacker News, and Qbserve became one of the
            top submissions that week, bringing a huge stream of sales and
            feedback.
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            8. SEO (starting immediately)
          </h3>
          <p className="mb-2">
            The difference between 1) and this one is timing. SEO/search is
            probably the most competitive marketing channel out there. 12 years
            ago, you could take a website and rank in for a decent keyword in a
            matter of weeks.
          </p>
          <p className="mb-2">
            Not anymore. Nowadays, you usually have to wait for months before
            you even start appearing in the top 100 months.
          </p>
          <p className="mb-2">
            There are certain exceptions, though. One of them is when there's a
            new category of searches appearing. Let me explain.
          </p>
          <p className="mb-2">
            Kapwing, is a very popular meme making tool, and they've been able
            to get their first 10 customers by ranking for 'meme maker':
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            Organic discovery on Google was definitely our most powerful
            acquisition channel, and all ten of our first customers found us
            after searching for "meme maker" or the like.
          </div>
          <p className="mb-2">
            "Meme maker" is a relatively new keyword (compared to something like
            "life insurance") and was probably not that competitive when Kapwig
            came out. If Kapwig was a life insurance company and they were
            trying to get their first customers ranking on it, I highly doubt
            that would happen.
          </p>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            9. Proactive Word of Mouth
          </h3>
          <p className="mb-2">
            Every product has a certain degree of word of mouth built-in.
            However, there are a few things you can proactively do to increase
            word-of-mouth.
          </p>
          <p className="mb-2">
            One thing is to find a segment of users with an audience that's also
            your audience. Take Blender Market ($232k/mo), a marketplace for
            artists to sell 3D models, and how they got their early adopters:
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            Most of these early sellers were freelancers and prominent artists
            in the community. Our pitch was help them generate some passive side
            income and let us handle the infrastructure. This approach paid off
            because those artists themselves had an audience that wanted to
            learn and buy from them: The advantage of attracting sellers that
            already had an audience was that they multiplied our initial
            customer reach dramatically by sharing their products.
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            10. Software Directories
          </h3>
          <p className="mb-2">
            Capterra, G2, GetApp. These are the top 3 most popular software
            directories in terms of traffic.
          </p>
          <p className="mb-2">
            These sites are like traffic brokers. They buy traffic from Google
            AdWords, drive it to their pages, and then charge you per
            click/impression/lead.
          </p>
          <p className="mb-2">
            If you're a founder in a B2B niche, this is a channel worth
            considering. Martial Arts on Rails ($5k/month) sells management
            software for martial arts facilities and gyms and they've seen
            success with Capterra:
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            After a couple of months I started running ads on Capterra, a search
            engine for business software, where I am now ranked first in
            searches for "martial arts gym software". This has become my
            strongest source for conversions. I was initially spending around
            $180 a month on Capterra, and it's now closer to $400 a month.
            Currently, Capterra and organic search results are the main
            acquisitions sources for my business.
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">
            11. Freelancing Marketplaces
          </h3>
          <p className="mb-2">
            UpWork, Freelancers, Fiverr. You might think these are marketplaces
            that only serve service providers. Think again.
          </p>
          <p className="mb-2">
            I've seen SaaS founders who were quite creative leverage these
            marketplaces to acquire customers. Take StoreMapper ($21k/mo), a
            SaaS that enables you to put a store location map on your e-commerce
            website. They used UpWork to successfully acquire customers: his
            SaaS:
          </p>
          <div className="border-l-2 border-[#03C9DF] p-4 md:p-2 rounded-r-lg my-6 text-icon">
            I searched job sites like Upwork for people looking to hire a
            freelancer to do a custom build, and would swoop in and pitch them
            on Storemapper instead.
          </div>
          <p className="mb-2">
            You want to be careful with this; just sending a message saying "Hey
            you don't need a dev, get X instead" is likely to get you banned
            from many platforms (after all, you're taking money away from them
            by saying their clients don't need to hire a dev and could use your
            software instead).
          </p>
          <p className="mb-2">
            In many cases, also, you can produce a win-win scenario by using a
            combination of your software + custom coding. For example, if I'm
            looking for a referral marketing platform, I'm more likely to pay
            attention by someone who says: "Hey, I can help you do this for $500
            instead of $7000 by using a combination of [my software] + [the
            custom thing you'll be doing]".
          </p>
          <p className="mb-2">
            As I mentioned, this post will be updated on ongoing basis (last
            update: 12th March, 2021) with more channels and examples.
          </p>
          <p className="mb-2">Thanks for reading :)</p>
        </article>

        {/* ========================================== */}
        {/* 5. ACTIONS BAR (Like, Save, Share)         */}
        {/* ========================================== */}
        <div className="flex items-center gap-6 border-t border-b border-gray-200 dark:border-white/10 py-4 mb-12">
          <button className="flex items-center gap-2 border border-gray-600 dark:border-[#363B57] rounded-4xl py-2 px-4 text-xs text-icon hover:text-[#FB8122] transition-colors">
            <ThumbsUp size={18} />
            <span>24 Likes</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-600 dark:border-[#363B57] rounded-4xl py-2 px-6 text-xs text-icon hover:text-[#FB8122] transition-colors">
            <Bookmark size={18} />
            <span>Save</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-600 dark:border-[#363B57] rounded-4xl py-2 px-6 text-xs text-icon hover:text-[#FB8122] transition-colors">
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>

        {/* ========================================== */}
        {/* 6. COMMENTS SECTION                        */}
        {/* ========================================== */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Comments (3)
          </h3>

          {/* Comment Input */}
          <div className="mb-10">
            <textarea
              rows="3"
              placeholder="Share your thoughts or ask a question..."
              className="w-full bg-white dark:bg-[#1D2659] border border-[#E6E6E6] dark:border-[#3E4A92] rounded-lg p-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all resize-none mb-4 shadow-sm"
            ></textarea>
            <button className="px-8 py-3 bg-primary hover:bg-[#e6751e] text-white rounded-full font-medium text-xs transition-all shadow-md shadow-[#FB8122]/20">
              POST COMMENT
            </button>
          </div>

          {/* Comment List */}
          <div className="space-y-8">
            {/* Comment 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#222B62] text-white flex items-center justify-center font-bold text-sm shrink-0">
                JD
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900 dark:text-white text-md">
                    John Doe
                  </span>
                  <span className="text-xs text-gray-500 dark:text-[#BACCDE]">
                    2 days ago
                  </span>
                </div>
                <p className="text-sm text-icon opacity-90 mb-2 leading-relaxed">
                  I built something similar last year. The hardest part wasn't
                  the AI, it was the integration with existing tools. Make sure
                  you handle that early.
                </p>
                <button className="flex items-center gap-1.5 text-xs text-icon opacity-90 hover:text-[#FB8122] dark:hover:text-[#FB8122] transition-colors">
                  <ThumbsUp size={14} />
                  29 Likes
                </button>
              </div>
            </div>

            {/* Comment 2 */}
              <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#222B62] text-white flex items-center justify-center font-bold text-sm shrink-0">
                AM
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900 dark:text-white text-md">
                   Alice M.
                  </span>
                  <span className="text-xs text-gray-500 dark:text-[#BACCDE]">
                    2 days ago
                  </span>
                </div>
                <p className="text-sm text-icon opacity-90 mb-2 leading-relaxed">
                  Great idea! I think targeting local dentists or real estate agents could be a massive untapped market for this.
                </p>
                <button className="flex items-center gap-1.5 text-xs text-icon opacity-90 hover:text-[#FB8122] dark:hover:text-[#FB8122] transition-colors">
                  <ThumbsUp size={14} />
                  20 Likes
                </button>
              </div>
            </div>

            {/* Comment 3 */}
               <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#222B62] text-white flex items-center justify-center font-bold text-sm shrink-0">
                JD
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900 dark:text-white text-md">
                   John Doe
                  </span>
                  <span className="text-xs text-gray-500 dark:text-[#BACCDE]">
                    2 days ago
                  </span>
                </div>
                <p className="text-sm text-icon opacity-90 mb-2 leading-relaxed">
                  I built something similar last year. The hardest part wasn't the AI, it was the integration with existing tools like Zendesk. Make sure you handle that early.
                </p>
                <button className="flex items-center gap-1.5 text-xs text-icon opacity-90 hover:text-[#FB8122] dark:hover:text-[#FB8122] transition-colors">
                  <ThumbsUp size={14} />
                  20 Likes
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
