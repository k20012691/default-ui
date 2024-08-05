import Input from "../components/Input";

export default {
    title: 'Input',
    component: Input,
}

const Template = args => <Input {...args} />

export const SingleLine = Template.bind({})
SingleLine.args = {
    label: 'Email',
    width: 400,
    multiline: false,
    password: false
}

export const Multiline = Template.bind({})
Multiline.args = {
    label: 'Describe your issue...',
    width: 400,
    multiline: true,
    password: false
}

export const Password = Template.bind({})
Password.args = {
    label: 'Password',
    width: 400,
    multiline: false,
    password: true
}
