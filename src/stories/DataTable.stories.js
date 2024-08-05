import DataTable from "../components/DataTable";

export default {
    title: 'Data Table',
    component: DataTable
}

const Template = args => <DataTable {...args} />

export const Default = Template.bind({})