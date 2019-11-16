<template>
    <section>
        <b-table
            :data="data"
            ref="table"
            detailed
            detail-key="id"
            @details-open="(row, index) => $buefy.toast.open(`Loading ${row.user.fullName}`)"
            :loading="tableLoading"
            :opened-detailed="openedDetails"
            >

            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="user.fullName" label="Name">
                    <template>
                        {{ props.row.user.fullName }}
                    </template> 
                </b-table-column>

                <b-table-column field="user.licenseNo" label="License Number">
                    {{ props.row.user.licenseNo }}
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
                                <strong>{{ props.row.user.first_name }} {{ props.row.user.last_name }}</strong>
                                <small>@{{ props.row.user.first_name }}</small>
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

    export default {
        data() {
            return {
                data: [
                    {
                        id: 1,
                        user: {
                            fullName: "Lance Lim",
                            licenseNo: "NA1-123-12312"
                        }
                    },
                    {
                        id: 2,
                        user: {
                            fullName: "Nikola Jokic",
                            licenseNo: "NA1-123-12313"
                        }
                    },
                ],
                openedDetails: [],
                tableLoading: false,
            }
        },
        methods: {
            toggle(row) {
                this.$refs.table.toggleDetails(row)
            },
            print(thing) {
                console.log(thing)
            }
        }
    }
</script>
