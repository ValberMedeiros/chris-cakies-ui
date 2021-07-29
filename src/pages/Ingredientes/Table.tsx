import * as React from 'react';
import MUIDataTable, {MUIDataTableColumn} from "mui-datatables";

const columnsDefinition: MUIDataTableColumn[] = [
    {
        name: "nome",
        label: "Nome"
    },
    {
        name: "unidadeDeMedida",
        label: "Unidade de medida"
    },
    {
        name: "quantidadeMedida",
        label: "Quantidade medida"
    },
    {
        name: "quantidadeEmEstoque",
        label: "Quantidade em Estoque"
    },
    {
        name: "valor",
        label: "Valor Unidade"
    }
];

const data = [
    {nome: 'Leite condensado', unidadeDeMedida: 'KG', quantidadeMedida: '5', quantidadeEmEstoque: '100', valor: '50.9'},
    {nome: 'Creme de leite', unidadeDeMedida: 'KG', quantidadeMedida: '1', quantidadeEmEstoque: '100', valor: '40.55'},
    {nome: 'Óleo', unidadeDeMedida: 'ML', quantidadeMedida: '900', quantidadeEmEstoque: '100', valor: '90.99'},
    {nome: 'Leite em pó', unidadeDeMedida: 'G', quantidadeMedida: '380', quantidadeEmEstoque: '100', valor: '150.55'},
    {nome: 'Leite condensado', unidadeDeMedida: 'KG', quantidadeMedida: '5', quantidadeEmEstoque: '100', valor: '50.9'},
    {nome: 'Creme de leite', unidadeDeMedida: 'KG', quantidadeMedida: '1', quantidadeEmEstoque: '100', valor: '40.55'},
    {nome: 'Óleo', unidadeDeMedida: 'ML', quantidadeMedida: '900', quantidadeEmEstoque: '100', valor: '90.99'},
    {nome: 'Leite em pó', unidadeDeMedida: 'G', quantidadeMedida: '380', quantidadeEmEstoque: '100', valor: '150.55'},
    {nome: 'Leite condensado', unidadeDeMedida: 'KG', quantidadeMedida: '5', quantidadeEmEstoque: '100', valor: '50.9'},
    {nome: 'Creme de leite', unidadeDeMedida: 'KG', quantidadeMedida: '1', quantidadeEmEstoque: '100', valor: '40.55'},
    {nome: 'Óleo', unidadeDeMedida: 'ML', quantidadeMedida: '900', quantidadeEmEstoque: '100', valor: '90.99'},
    {nome: 'Leite em pó', unidadeDeMedida: 'G', quantidadeMedida: '380', quantidadeEmEstoque: '100', valor: '150.55'}
]

export const Table = () => {
    return (
        <MUIDataTable
            columns={columnsDefinition}
            data={data}
            title="Listagem de ingredientes"/>
    );
};