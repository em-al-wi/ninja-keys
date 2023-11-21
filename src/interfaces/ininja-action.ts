export interface INinjaAction {
  /**
   * unique id of the action. Might be displayed as breadcrumb in multimenu
   */
  id: string;

  /**
   * visible title of the action
   */
  title: string;

  /**
   * Optional shortcut to display and register
   */
  hotkey?: string;

  /**
   * Function to execute on select
   */
  handler?: Function;

  /**
   * Html to render as custom icon
   */
  icon?: string;

  /**
   * If using flat structure use id of actions to make a multilevel menu
   */
  parent?: string;

  /**
   * Keywords to use for search
   */
  keywords?: string;

  /**
   * If using flat structure then ids of child menu actions. Not required on tree structure
   */
  children?: string[];

  /**
   * Section text. Like a header will be group with other same sections
   */
  section?: string;

  /**
   * Optional title attribute of the action title
   */
  subtitle?: string;
}
