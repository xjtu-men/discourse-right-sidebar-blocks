import Category from "discourse/models/category";
import getURL from "discourse-common/lib/get-url";
import GlimmerComponent from "discourse/components/glimmer";
import { tracked } from "@glimmer/tracking";

export default class CategoryTopics extends GlimmerComponent {
  @tracked topics = null;
  @tracked category = null;

  constructor() {
    super(...arguments);
    const count = this.args?.params?.count || 10;
    const categoryId = this.args?.params?.id;

    if (!categoryId) {
      return;
    }

    const filter = "c/" + categoryId;
    this.category = Category.findById(categoryId);

    this.store.findFiltered("topicList", { filter }).then((result) => {
      const results = result.topic_list.topics;
      results.forEach((topic) => {
        topic.url = `${getURL("/t/")}${topic.slug}/${topic.id}`;
        if (topic.last_read_post_number > 0) {
          topic.url += `/${topic.last_read_post_number}`;
        }
      });

      this.topics = results.slice(0, count);
    });
  }

  willDestroy() {
    this.topics = null;
  }
}
