import ContainedButton from "../components/Button";

export default {
    title: "Button",
    component: ContainedButton,
}

const Template = args => <ContainedButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Primary',
    style: 'primary',
    size: 'medium'
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Secondary',
    style: 'secondary',
    size: 'medium'
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Disabled',
    size: 'medium',
    disabled: true,
}

export const Destructive = Template.bind({})
Destructive.args = {
    label: 'Destructive',
    style: 'destructive',
    size: 'medium',
}