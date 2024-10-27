# Right Sidebar Blocks

Adds ability to display a right-sided sidebar to topic list routes. There are two settings included:

- `blocks`: choose the blocks to display and adjust their ordering
- `show_in_routes`: decide which routes to display the sidebar (by default, it will show on all lists except for `/categories`)

### Included blocks

This theme component includes a few blocks you can use in your sidebar:

- popular-tags
- top-contributors
- recent-replies
- category-topics
- custom-html
- subcategory-list
- tag-topics
- top-topics
- category-list

You can also use other Ember components as blocks, you just need to use the correct name. For example, core includes a `signup-cta` Ember component, and you can use it in the sidebar as is. (Note that you can't use components that expect a set of parameters.)

### Available block parameters

You can control some features for the provided blocks via parameters.

| name                        | description                           | default        | value                                            | available for                    |
|-----------------------------|---------------------------------------|----------------| ------------------------------------------------ |----------------------------------|
| count                       | limits number of results              | varies         | number                                           | all except custom-html           |
| excerptLimit                | limits length of each reply excerpt   | 150            | number                                           | recent-replies                   |
| id                          | category id                           |                | category id (category-list uses comma-separated) | category-topics, category-list   |
| content                     | contents to display                   |                | html                                             | custom-html                      |
| scopeToCategory             | only shows in category X              |                | category id                                      | popular-tags                     |
| excludedTags                | list of excluded tags                 |                | tagnames                                         | popular-tags                     |
| displayInSpecificCategories | list of categories to show the widget | all            | comma-separated numbers                          | popular-tags                     |
| id                          | leaderboard id                        |                | number                                           | minimal-gamification-leaderboard |
| tag                         | which tag to display                  |                | tag id                                           | tag-topics                       |
| period                      | time period of top topics             | weekly         | all, yearly, quarterly, monthly, weekly, daily   | top-topics                       |
| title                       | title of the block                    | varies         | string                                           | tag-topics, category-list        |
| excludedGroupNames          | Excludes specified groups             |            | Group names                                      | top-contributors                 |
| order                       | Orders the contributors               | likes_received | String (likes_received or likes_given)       | top-contributors                 |
| period                      | Time period for top contributors      | yearly         | all, yearly, quarterly, monthly, weekly, daily   | top-contributors                 |

### Blocks from other plugins

The Discourse Calendar plugin comes with a block called `upcoming-events-list` that you can use in conjunction with this component. You'll want to ensure the desired route is enabled via the `events calendar categories` setting in the Calendar plugin settings. The block params use this [syntax](https://momentjs.com/docs/#/displaying/format/), for example `MMMM D, YYYY`.

## xjtu.men config
category-topics
id
11

category-topics
id
2

top-contributors

minimal-gamification-leaderboard
id
2

popular-tags

custom-html
content
<h3 name="get-started-1" class="anchor">链接</h3>     <li><a href="https://m.xjtu.men/">Mastodon 社交: 交大門 <strong>M</strong> </a></li>  <li><a href="https://c.xjtu.live">评课社区: 课程信息与评价</a></li>  <li><a href="https://github.com/xjtumen">Xjtumen Org @ GitHub</a></li>   <li><a href="https://cf.xjtu.live/learning-materials/">学习资料</a></li>

custom-html
content
<h3 name="get-started-1" class="anchor">快速入門</h3> <li><a href="/faq">FAQ</a></li>  <li><a href="/t/topic/4730">开发任务列表</a></li> <li><a href="/t/topic/209">随缘转发宣传海报</a></li> <li><a href="/t/topic/127">功能更新 CHANGE LOG</a></li> <li><a href="/t/topic/4812">学习资料汇总分享平台</a></li> <li><a href="/t/topic/3981">本论坛推荐阅读</a></li> <li><a href="/t/topic/1440">Android App客户端</a></li> <li><a href="/t/topic/4376">知乎：如何看待西安交通大学新 bbs 交大门，高校 bbs 是否注定走向衰亡？</a></li> <li><a href="/t/topic/1503">访问速度慢？用这个链接来检测 网络出口IP 和 连接信息</a></li> <li><a href="/t/topic/1477">关于xjtu.men被Tencent认定为危险网站的声明</a></li>

### others
top_contributors.heading
Most liked

also in translation
Cheers->点数->Karma
