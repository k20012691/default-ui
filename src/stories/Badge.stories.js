import Badge from "../components/Badge";

export default {
    title: 'Badge',
    component: Badge,
}

const Template = args => <Badge {...args} />

export const Filled = Template.bind({})
Filled.args = {
    label: 'Filled',
    variant: 'filled',
    size: 'regular',
    rounded: false
}

export const Outlined = Template.bind({})
Outlined.args = {
    label: 'Outlined',
    variant: 'outlined',
    size: 'regular',
    rounded: false
}

export const Small = Template.bind({})
Small.args = {
    label: 'Small',
    variant: 'filled',
    size: 'small',
    rounded: false
}

export const Rounded = Template.bind({})
Rounded.args = {
    label: 'Rounded',
    variant: 'filled',
    size: 'regular',
    rounded: true
}