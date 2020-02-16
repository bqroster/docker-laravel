import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Example from '../components/ExampleComponent';

storiesOf('All Basic Examples', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
        'Example One',
        () => ({
            components: { Example },
            props: {
                content: {
                    default: text('Text', "Content via knobs, change it.")
                }
            },
            template: '<example :content="content" />'
        }),
        {
            info: {
                header: false,
                summary: 'This is a Basic storybook example 1'
            }
        }
    )
    .add(
        'Example One No Style',
        () => ({
            components: { Example },
            props: {
                content: {
                    type: String,
                    default: text('Text', "No border, Content via knobs, change it.")
                },

                hasStyle: {
                    type: Boolean,
                    default: false
                }
            },
            template: '<example :content="content" :hasStyle="hasStyle" />'
        }),
        {
            info: {
                header: false,
                summary: 'This is a Basic storybook example 1 without border'
            }
        }
    );
