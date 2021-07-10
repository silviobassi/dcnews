import { Story, Meta } from '@storybook/react';
import ValueDescriptor, { ValueDescriptorProps } from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
    description: 'Ganhos do mês',
    value: 560322.02,
    variant: 'default',
    isCurrency: false
}

export const Primary = Template.bind({})
Primary.args = {
    description: 'Ganhos do mês',
    value: 560322.02,
    variant: 'primary',
    isCurrency: false
}

export const DefaultCurrenty = Template.bind({})
DefaultCurrenty.args = {
    description: 'Ganhos do mês',
    value: 560322.02,
    variant: 'default',
    isCurrency: true
}

export const PrimaryCurrency = Template.bind({})
PrimaryCurrency.args = {
    description: 'Ganhos do mês',
    value: 560322.02,
    variant: 'primary',
    isCurrency: true
}