<template>
    <v-card flat>
        <v-card-title>
            Produtos em Estoque
            <v-spacer></v-spacer>
            <v-btn color="primary darken-4" @click="createNewProduct()">
                Novo
                <v-icon right>mdi-plus</v-icon>
            </v-btn>
        </v-card-title>

        <v-data-table
            :loading="loading"
            :headers="tableHeaders"
            :items="products"
            :items-per-page="10"
            class="elevation-6">
            <template v-slot:[`item.edit`]="{ item }">
                <v-btn icon color="primary darken-4" @click="editProduct(item)"><v-icon>mdi-pencil</v-icon></v-btn>
            </template>
            <template v-slot:[`item.delete`]="{ item }">
                <v-btn icon color="red darken-1" @click="removeProduct(item)"><v-icon>mdi-delete</v-icon></v-btn>
            </template>
        </v-data-table>


        <CreateNewProductFormDialog ref="createProductForm" @close="getProducts()"/>
        <UpdateProductFormDialog ref="updateProductForm" @close="getProducts()"/>
    </v-card>
</template>

<script>
import ProductsService from '@/services/products-service'
import CreateNewProductFormDialog from './CreateNewProductFormDialog.vue';
import UpdateProductFormDialog from './UpdateProductFormDialog.vue';
export default {
    components: { CreateNewProductFormDialog, UpdateProductFormDialog },

    data: () => ({
        loading: false,
        products: undefined,
        tableHeaders: [
            { text: "ID", align: "center", sortable: true, value: "id" },
            { text: "Produto", align: "center", sortable: true, value: "name" },
            { text: "Valor", align: "center", sortable: true, value: "price" },
            { text: "Em Estoque", align: "center", sortable: true, value: "amount" },
            { text: "Editar", sortable: false, value: "edit", align: "center" },
            { text: "Remover", sortable: false, value: "delete", align: "center" },
        ],
    }),
    
    methods: {
        async getProducts() {
            this.loading = true;
            try {
                const response = await ProductsService.getAll();
                this.products = response.data;
            }
            catch (error) {
                window.alert("Erro ao buscar lista de produtos");
            }
            finally {
                this.loading = false;
            }
        },
        
        createNewProduct() {
            this.$refs.createProductForm.open();
        },

        editProduct(product) {
            this.$refs.updateProductForm.open(product);
        },

        async removeProduct(product) { 
            if(window.confirm("Tem certeza que deseja remover o produto?")) {
                this.loading = true;
                try {
                    const response = await ProductsService.delete(product.id);
                    if(response.status == 200) {
                        window.alert("Produto removido com sucesso!")
                        this.getProducts();
                    }
                } catch (error) {
                    window.alert("Erro ao tentar remover produto");
                } finally {
                    this.loading = true;
                }
            }
        }
    },

    created: async function () {
        await this.getProducts();
    },
}
</script>