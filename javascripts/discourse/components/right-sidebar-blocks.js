import GlimmerComponent from "discourse/components/glimmer";
import { getOwner } from "@ember/application";
import { tracked } from "@glimmer/tracking";

export default class RightSidebarBlocks extends GlimmerComponent {
  @tracked blocks = [];

  constructor() {
    super(...arguments);

    const blocksArray = [];

    JSON.parse(settings.blocks).forEach((block) => {
      if (getOwner(this).hasRegistration(`component:${block.name}`)) {
        block.classNames = `rs-component rs-${block.name}`;
        block.parsedParams = {};
        block.params.forEach((p) => {
          block.parsedParams[p.name] = p.value;
        });
        blocksArray.push(block);
      } else {
        // eslint-disable-next-line no-console
        console.warn(
          `The component "${block.name}" was not found, please update the configuration for discourse-right-sidebar-blocks.`
        );
      }
    });

    this.blocks = blocksArray;
  }
}
