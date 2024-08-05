import Checkedbox from "../components/Checkbox";

export default {
    title: 'CheckedBox',
    component: Checkedbox
}

const Template = args => <Checkedbox {...args} />

export const NoLabel = Template.bind({})

export const Label = Template.bind({})
Label.args = {
    label: 'Cookies'
}