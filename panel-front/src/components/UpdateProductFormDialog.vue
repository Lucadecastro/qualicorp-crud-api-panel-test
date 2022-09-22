<template>
     <v-dialog transition="dialog-top-transition" max-width="500" v-model="showDialog" persistent>
        <v-card :loading="loading">
            <v-card-title>Atualiza Produto</v-card-title>
            <v-card-text>
                <v-text-field v-model="product.name" type="text" label="Nome do Produto:"></v-text-field>
                <v-text-field v-model="product.price" type="number" label="Valor do Produto:"></v-text-field>
                <v-text-field v-model="product.amount" type="number" label="Quantidade em Estoque:"></v-text-field>
            </v-card-text>
            <v-card-actions style="padding-bottom: 20px;">
                <v-spacer></v-spacer>
                <v-btn color="primary darken-4" dark @click="updateProduct()">Atualizar</v-btn>
                <v-btn color="red darken-2" dark @click="close()">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
     </v-dialog>
</template>

<script>
import ProductsService from '@/services/products-service';
export default {
    data: () => ({
        showDialog: false,
        loading: false,
        product: {
            id: undefined,
            name: undefined,
            price: undefined,
            amount: undefined,
        }
    }),

    methods: {
        open(product) {
            this.product = product;
            this.showDialog = true;
        },

        cleanFields() {
            this.product.name = this.product.price = this.product.amount = undefined
        },

        close() {
            this.cleanFields();
            this.showDialog = false
            this.$emit("close");
        },

        validateProductBeforeSave() {
            if(!this.product.name || !this.product.price) return false;
            return true;
        },

        async updateProduct() {
            try {
                if(!this.validateProductBeforeSave()) {
                    window.alert("Os campos Nome e valor são obrigatórios!");
                    return;
                }
                this.loading = true;
                const response = await ProductsService.update(this.product);
                if(response.status == 200) {
                    this.close()
                    window.alert("Produto atualizado com sucesso!");
                    return;
                } 
                window.alert("Erro ao cadastrar produto");
            } catch (error) {
                window.alert(error.message)
            } finally {
                this.loading = false;
            }
        },
    },
}
</script>