<template>
  <section class="services" id="services">
    <h2 class="title">
      {{ servicesListSection.title }}
    </h2>
    <table class="body">
      <tbody @click="$emit('openModal')">
        <tr>
          <td class="name">{{ servicesListSection.name[0] }}</td>
          <td class="cost">{{ servicesListSection.cost[0] }}</td>
        </tr>
        <tr>
          <td class="name">{{ servicesListSection.name[1] }}</td>
          <td class="cost">{{ servicesListSection.cost[1] }}</td>
        </tr>
        <tr>
          <td class="name">{{ servicesListSection.name[2] }}</td>
          <td class="cost">{{ servicesListSection.cost[2] }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style>
.body {
  width: 60vw;
  margin: 0 auto;
}

tr {
  height: 3vw;
  cursor: pointer;
  transition: all .25s linear;
}

tr:hover {
  background: #1550e7;
  color: #fff;
}

td {
  border: 1px solid #000;
}

.name {
  padding: 10px;
}

.cost {
  text-align: center;
  font-weight: 800;
}

.services {
  padding: 60px 0;
}

.title {
  position: relative;
  margin: 0;
  margin-left: 60px;
  font-size: 16px;
  line-height: 1.3;
  color: #111111;
  width: 255px;
}
</style>