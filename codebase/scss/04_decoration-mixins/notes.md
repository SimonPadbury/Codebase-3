// DECORATION MIXINS: NOTES
// ========================

/*

Decoration mixins are not necessary because decoration classes can simply refer to the decoration variables in `01_variables/_decoration.scss`. And any utility or component can also simply refer to the decoration variables therein.

In this folder (`02_mixins-decoration/`) you may develop mixins as composites various decoration variables, e.g. to build simple card utilities or message boxes.

For example: in the Codebase docs I have build simple info boxes such as:

<div class="initial-icon deco-bl-thick-solid deco-b-primary deco-p-md deco-bg-silver">
  <i class="fa fa-thumbs-o-up deco-text-primary"></i> <b>Hat tip:</b>...
</div>

These deco classes all refer to deco variables, and the `initial-icon` class includes the `initial-icon` mixin. So these could have been combined thus:

.message-box--primary {
  border-left: $deco-border-thick-solid;
  border-color: $color-primary;
  background: $color-silver;
  @include initial-icon;
  > i:first-of-type {
    color: $color-primary;
  }
}

*/