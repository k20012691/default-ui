import Toggle from "../components/Toggle";

export default {
    title: 'Toggle',
    component: Toggle
}

const Template = args => <Toggle {...args} />

export const NoLabel = Template.bind({})

export const Label = Template.bind({})
Label.args = {
    label: 'Optional Cookies'
}