import Category from "discourse/models/category";
import getURL from "discourse-common/lib/get-url";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class CategoryTopics extends Component {
  @service store;

  @tracked topics = null;
  @tracked category = null;

  constructor() {
    super(...arguments);
    const count = this.args?.params?.count || settings.max_list_length;
    const categoryId = this.args?.params?.id;

    if (!categoryId) {
      return;
    }

    const filter = {
      filter: "latest",
      params: {
        category: categoryId,
      },
    };
    this.store.set("isLoading", true);
    this.store.findFiltered("topicList", { filter }).then((topicList) => {
      this.topicList = topicList.topics.slice(0, count);
      // results.forEach((topic) => {
      //   topic.url = `${getURL("/t/")}${topic.slug}/${topic.id}`;
      //   if (topic.last_read_post_number > 0) {
      //     topic.url += `/${topic.last_read_post_number}`;
      //   }
      // });
      this.store.set("isLoading", false);
    });
  }

  willDestroy() {
    this.topics = null;
  }
}
