<script>
import { Button, Card } from "@components";
export default {
  name: "Dashboard",
  components: {
    Button,
    Card,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container-fluid p-3 dashboard">
    <h1 class="h3 mb-3">AGENCY PERFORMANCE TRACKER</h1>
    <div class="row">
      <div class="col-xl-6 col-xxl-5 d-flex">
        <div class="w-100">
          <div class="row">
            <div class="col-sm-6">
              <Card title="วางแผนรักษาสัญญา" icon="fileIcon"> BodyCard </Card>

              <Card title="Visitors" />
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col mt-0">
                      <h5 class="card-title">Earnings</h5>
                    </div>

                    <div class="col-auto">
                      <div class="stat text-primary">
                        <i class="align-middle" data-feather="dollar-sign"></i>
                      </div>
                    </div>
                  </div>
                  <h1 class="mt-1 mb-3">$21.300</h1>
                  <div class="mb-0">
                    <span class="text-success">
                      <i class="mdi mdi-arrow-bottom-right"></i> 6.65%
                    </span>
                    <span class="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col mt-0">
                      <h5 class="card-title">Orders</h5>
                    </div>

                    <div class="col-auto">
                      <div class="stat text-primary">
                        <i
                          class="align-middle"
                          data-feather="shopping-cart"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <h1 class="mt-1 mb-3">64</h1>
                  <div class="mb-0">
                    <span class="text-danger">
                      <i class="mdi mdi-arrow-bottom-right"></i> -2.25%
                    </span>
                    <span class="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6 col-xxl-7">
        <div class="card flex-fill w-100">
          <div class="card-header">
            <h5 class="card-title mb-0">Recent Movement</h5>
          </div>
          <div class="card-body py-3">
            <div class="chart chart-sm">
              <canvas id="chartjs-dashboard-line"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  background: #003781;
  * {
    color: white;
  }
}
</style>
