<template>
    <section>
        <b-table
            :data="data"
            ref="table"
            detailed
            detail-key="licenseno"
            @details-open="(row, index) => $buefy.toast.open(`Loading ${row.user.fullName}`)"
            :loading="tableLoading"
            :opened-detailed="openedDetails"
            >

            <template slot-scope="props">
                <b-table-column field="user.fullName" label="Name">
                    <template>
                        {{ props.row.fullname }}
                    </template> 
                </b-table-column>

                <b-table-column field="licenseno" label="License Number">
                    {{ props.row.licenseno }}
                </b-table-column>

                <b-table-column field="businessname" label="Business">
                    {{ props.row.businessname }}
                </b-table-column>

                <b-table-column field="businessno" label="Business Contact Number">
                    {{ props.row.businessno }}
                </b-table-column>
            </template>

            <template slot="detail" slot-scope="props">
                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <img src="/static/img/placeholder-128x128.png">
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{ props.row.fullname }} {{ props.row.licenseno }}</strong>
                                <small>@{{ props.row.businessno }}</small>
                                <small>31m</small>
                                <br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                        </div>
                    </div>
                </article>
            </template>

            <template slot="empty">
                <p>
                    Nothing Here.
                </p>
            </template>
        </b-table>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        data() {
            return {
                data: [],
                openedDetails: [],
                tableLoading: false,
            }
        },
        computed: {
            ...mapGetters(['ListofPeople']),    
        },
        methods: {
            ...mapActions(['fetchTable']),
        },

        async mounted() {
            this.tableLoading = false;
            await this.fetchTable("people");
            this.data = this.ListofPeople;
            this.tableLoading = false;
        }
    }
</script>
