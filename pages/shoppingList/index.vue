<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card
          title="Add Item"
          class="mt-4 mb-4 shadow"
          bg-variant="darker"
          text-variant="light"
        >
          <b-form @submit="addShoppingListItem" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Item:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.item_name"
                placeholder="Enter Item Name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Category:"
                label-for="input-2"
            >
              <b-form-select
                id="input-2"
                v-model="form.category"
                :options="categories"
              >
              </b-form-select>
            </b-form-group>
            
            <b-form-group
              id="input-group-3"
              label="Quantity:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.quantity"
                placeholder="Enter Quantity"
                type="number"
                min="1"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Add Item</b-button>
            <b-button type="reset" variant="danger">Clear</b-button>
          </b-form>
        </b-card>
      </b-col>
      <b-col cols="8">
        <b-card
          title="Shopping List"
          class="mt-4 mb-4 shadow"
          bg-variant="darker"
          text-variant="light"
        >
          <b-table
            id="shoppingListTable"
            ref="shoppingListTable"
            class="text-center"
            head-variant="dark"
            sticky-header="900px"
            :items="getShoppingListItems"
            :fields="fields"
            striped
            dark
            hover
          >
            <template #cell(shopped)="row">
                <b-btn
                    size="sm"
                    variant="outline-success"
                    @click="onShopped(row.item.id)"
                >
                    Remove
                </b-btn>
            </template>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
        form: {
            item_name: '',
            category: '',
            quantity: null,
        },
        fields: [
            "item",
            "category",
            "quantity",
            "shopped",
        ],
        categories: [
            "",
            "Snacks",
            "Ingredients",
            "Drinks",
            "Household Supplies",
        ],
        itemToRemove: [],
    };
  },
  methods: {
    getShoppingListItems() {
      return this.$axios.get(`/api/fridayAPI/shopping_list/?active=true`).then((resp) => {
        this.shoppingList = resp.data.map((item) => {
          return {
            id: item.id,
            item: item.item_name,
            category: item.category,
            cost: item.approx_cost,
            quantity: item.quantity,
          };
        });
        return this.shoppingList || [];
      });
    },
    addShoppingListItem() {
        let config

        this.form.active = true
        config = {
            method: 'post',
            url: '/api/fridayAPI/shopping_list/',
            data: this.form,
        }
        if (!this.form.item_name || !this.form.category) {
            this.$toasted.global.defaultError({
                msg: 'Please enter an item and category'
            })
        }   else {
            this.$axios.request(config).then((resp) => {
                Object.keys(this.form).forEach((key) => {
                    this.form[key] = resp.data[key]
                })
                this.$toasted.global.defaultSuccess({
                    msg: 'Item Added Successfully'
                })
            }).catch(() => {
                this.$toasted.global.defaultError({
                    msg: 'There was a problem adding this item.'
                })
            })
        }
    },
    onReset() {
        this.form.item_name = null
        this.form.category = null
        this.form.quantity = null
    },
    onShopped(item) {
        // let config
        
        // this.item.active = false
        // config = {
        //     method: 'put',
        //     url: `api/fridayAPI/shopping_list/${this.item.id}`,
        //     data: this.item,
        // }
        // this.$axios.request(config).then((resp) => {
        //     Object.keys(this.item).forEach((key) => {
        //         this.item[key] = resp.data[key]
        //     })
        //     this.$toasted.global.defaultSuccess({
        //             msg: 'Item Added Successfully'
        //     })
        // }).catch(() => {
        //     this.$toasted.global.defaultError({
        //         msg: 'There was a problem removing this item.'
        //     })
        // })
        this.itemToRemove = item
    }
  },
};
</script>
