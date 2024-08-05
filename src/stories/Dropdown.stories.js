import Dropdown from "../components/Dropdown";

export default {
    title: 'Dropdown',
    component: Dropdown,
}

const Template = args => <Dropdown {...args} />

export const FullWidth = Template.bind({})
FullWidth.args = {
    multiple: false
}

export const FixedWidth = Template.bind({})
FixedWidth.args = {
    width: 500,
    multiple: false
}

export const MultipleInputs = Template.bind({})
MultipleInputs.args = {
    multiple: true,
    width: 500
}