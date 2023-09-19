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

    const filter = "c/" + categoryId;
    this.category = Category.findById(categoryId);

    this.store.findFiltered("topicList", { filter }).then((result) => {
      this.isLoading = false;

      const results = result.topic_list.topics;

      results.forEach((topic) => {
        topic.url = `${getURL("/t/")}${topic.slug}/${topic.id}`;
        if (topic.last_read_post_number > 0) {
          topic.url += `/${topic.last_read_post_number}`;
        }
      });

      this.topics = results.slice(0, count);
      this.isLoading = false;

    });

  }
  @action
  createTopic() {
    if (this.currentUser) {
      getOwner(this).lookup("controller:composer").open({
        action: "createTopic",
        draftKey: "createTopic",
        categoryId: this.category.id,
      });
    } else {
      this.router.transitionTo("login");
    }
  }

  willDestroy() {
    this.topics = null;
  }
}
