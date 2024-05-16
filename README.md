# Responsive landing page layout
## Enjoy it deployed
https://rotvein.github.io/Orbiting-Icons
## Demo
<img src="./demo/demo.gif" />

## Description
### Technologies used
This layout was made `html`, `css`, `scss` and bundled with `webpack`. 

Animations were done with `scss`.
### Customization
#### Colors
In the file `/src/style/abstracts/_colors.scss` you can change the colors. Then an iteration from `src/style/base/_custom_props.scss` and a mixin `setColors` from `src/style/base/_mixins.scss` will create custom properties for light and dark colors based on this `colors` file.
#### Mixin getPointsOnCircle
This mixin from `src/style/base/_mixins.scss` used in `src/style/base/_orbit_.scss` will calculate the coordinates of icons that orbit around the center image, based on your passed radius and number of icons, to space them evenly. 
#### Size adjustment
You can adjust the size in the `src/style/base/_orbit_.scss` just by chaning the `$circle-size` and `$img-size` declared in the `.orbit` selector.

