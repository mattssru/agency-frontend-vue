<script></script>

<template>
  <nav id="sidebar" class="sidebar js-sidebar">
    <div class="sidebar-content js-simplebar">
      <a class="sidebar-brand" href="/">
        <span class="align-middle">Agent</span>
      </a>

      <ul class="sidebar-nav">
        <li class="sidebar-header">ชื่อเอเจ้น นามสกุล</li>

        <li class="sidebar-item active">
          <router-link to="/">
            <span class="align-middle">AG</span>
          </router-link>
        </li>

        <li class="sidebar-item">
          <router-link to="/um">
            <i class="align-middle" data-feather="user"></i>
            <span class="align-middle">UM</span>
          </router-link>
        </li>
      </ul>

      <div class="sidebar-cta">
        <a href="/log-in" class="btn btn-light">back</a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
