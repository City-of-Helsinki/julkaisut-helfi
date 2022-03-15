# Facets Range Dropdowns
Provides processors and a widget to handle ranges with dropdowns in facets.

This module mainly improves upon the Range slider widget provided by the Facets module in
its Facets Range Widget submodule and the Range dropdowns widget provided by https://www.drupal.org/files/issues/dropdowns-range-widget-2928069-2.patch.

The Range dropdowns widget provided by the patch extends the Range slider widgets
which seems to be an odd design choice because it leads to all kinds of complications.
It seems to be better to provide dropdowns in a similar way as the default Dropdown widget
provided by Facets.

To speed up development of a Range dropdowns widget this separate module brings together best
of both worlds. Once a stable widget is available it might be better to merge
this into the Facets module itself.
