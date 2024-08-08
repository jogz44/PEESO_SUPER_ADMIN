<template>
  <div class="subcontent">
    <!--  <navigation-bar @today="onToday" @prev="onPrev" @next="onNext" /> -->

    <q-card-section class="row" style="margin-top: -8px">
      <div>
        <div class="text-h6" :style="{ fontSize: '13px', fontWeight: '400' }">
          TODAY {{ dayName }} {{ day }} {{ monthName }} {{ year }}
        </div>
        <div class="text-subtitle2" :style="{ marginTop: '-5px' }">
          {{ monthName }} {{ day }}, {{ year }} / {{ time }}
        </div>
      </div>
    </q-card-section>
    <div class="row justify-center">
      <div style="display: flex; max-width: 800px; width: 100%">
        <q-calendar-month
          ref="calendar"
          v-model="selectedDate"
          animated
          bordered
          focusable
          hoverable
          no-active-date
          :day-min-height="60"
          :day-height="0"
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-day="onClickDay"
          @click-workweek="onClickWorkweek"
          @click-head-workweek="onClickHeadWorkweek"
          @click-head-day="onClickHeadDay"
        >
          <template #week="{ scope: { week, weekdays } }">
            <template
              v-for="(computedEvent, index) in getWeekEvents(week, weekdays)"
              :key="index"
            >
              <div
                :class="badgeClasses(computedEvent)"
                :style="badgeStyles(computedEvent, week.length)"
              >
                <div
                  v-if="computedEvent.event && computedEvent.event.details"
                  class="title q-calendar__ellipsis"
                >
                  {{
                    computedEvent.event.title +
                    (computedEvent.event.time
                      ? " - " + computedEvent.event.time
                      : "")
                  }}
                  <q-tooltip>{{ computedEvent.event.details }}</q-tooltip>
                </div>
              </div>
            </template>
          </template>
        </q-calendar-month>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QCalendarMonth,
  daysBetween,
  isOverlappingDates,
  parsed,
  parseDate,
  today,
  indexOf,
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";
/* import NavigationBar from "../components/NavigationBar.vue"; */
import { defineComponent } from "vue";

// The function below is used to set up our demo data
const CURRENT_DAY = new Date();
function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY);
  newDay.setDate(day);
  const tm = parseDate(newDay);
  return tm.date;
}

export default defineComponent({
  name: "MonthSlotWeek",
  components: {
    /* NavigationBar, */
    QCalendarMonth,
  },
  data() {
    return {
      dayName: "",
      day: "",
      monthName: "",
      year: "",
      time: "",
      selectedDate: today(),
      events: [
        {
          id: 1,
          title: "Web Developer",
          details:
            "Everything is funny as long as it is happening to someone else",
          start: getCurrentDay(1),
          end: getCurrentDay(1),
          bgcolor: "green",
        },
        {
          id: 2,
          title: "Back End Developer",
          details: "Buy a nice present",
          start: getCurrentDay(4),
          end: getCurrentDay(4),
          bgcolor: "green",
          icon: "fas fa-birthday-cake",
        },
        {
          id: 3,
          title: "Truck Driver",
          details: "Time to pitch my idea to the company",
          start: getCurrentDay(10),
          end: getCurrentDay(10),
          time: "10:00",
          duration: 120,
          bgcolor: "green",
          icon: "fas fa-handshake",
        },
        {
          id: 4,
          title: "Sales Manager",
          details: "Company is paying!",
          start: getCurrentDay(10),
          end: getCurrentDay(10),
          time: "11:30",
          duration: 90,
          bgcolor: "green",
          icon: "fas fa-hamburger",
        },
        {
          id: 5,
          title: "Full Stack Developer",
          details: "Always a nice chat with mom",
          start: getCurrentDay(20),
          end: getCurrentDay(20),
          time: "17:00",
          duration: 90,
          bgcolor: "green",
          icon: "fas fa-car",
        },
        {
          id: 6,
          title: "Mobile App Developer",
          details: "Teaching Javascript 101",
          start: getCurrentDay(22),
          end: getCurrentDay(22),
          time: "08:00",
          duration: 540,
          bgcolor: "green",
          icon: "fas fa-chalkboard-teacher",
        },
        {
          id: 7,
          title: "Jeepney Driver",
          details: "Meet GF for dinner at Swanky Restaurant",
          start: getCurrentDay(22),
          end: getCurrentDay(22),
          time: "19:00",
          duration: 180,
          bgcolor: "green",
          icon: "fas fa-utensils",
        },
        {
          id: 8,
          title: "Data Encoder",
          details: "Stay in shape!",
          start: getCurrentDay(27),
          end: getCurrentDay(28),
          bgcolor: "green",
          icon: "rowing",
        },
        {
          id: 9,
          title: "Branch Manager",
          details: "Time for some weekend R&R",
          start: getCurrentDay(22),
          end: getCurrentDay(29),
          bgcolor: "green",
          icon: "fas fa-fish",
        },
        {
          id: 10,
          title: "Sales Executive",
          details:
            "Trails and hikes, going camping! Don't forget to bring bear spray!",
          start: getCurrentDay(22),
          end: getCurrentDay(29),
          bgcolor: "green",
          icon: "fas fa-plane",
        },
      ],
    };
  },

  created() {
    this.setDateTime();
    setInterval(this.setDateTime, 60000); // Update the time every minute
  },

  methods: {
    setDateTime() {
      const date = new Date();
      const dayNames = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ];
      const monthNames = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
      ];

      this.dayName = dayNames[date.getDay()];
      this.day = date.getDate();
      this.monthName = monthNames[date.getMonth()];
      this.year = date.getFullYear();
      this.time = this.formatTime(date);
    },
    formatTime(date) {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const strMinutes = minutes < 10 ? "0" + minutes : minutes;
      return hours + ":" + strMinutes + " " + ampm;
    },

    getWeekEvents(week, weekdays) {
      const firstDay = parsed(week[0].date + " 00:00");
      const lastDay = parsed(week[week.length - 1].date + " 23:59");

      const eventsWeek = [];
      this.events.forEach((event, id) => {
        const startDate = parsed(event.start + " 00:00");
        const endDate = parsed(event.end + " 23:59");

        if (isOverlappingDates(startDate, endDate, firstDay, lastDay)) {
          const left = daysBetween(firstDay, startDate, true);
          const right = daysBetween(endDate, lastDay, true);

          eventsWeek.push({
            id, // index event
            left, // Position initial day [0-6]
            right, // Number days available
            size: week.length - (left + right), // Size current event (in days)
            event, // Info
          });
        }
      });

      const events = [];
      if (eventsWeek.length > 0) {
        const infoWeek = eventsWeek.sort((a, b) => a.left - b.left);
        infoWeek.forEach((_, i) => {
          this.insertEvent(events, week.length, infoWeek, i, 0, 0);
        });
      }

      return events;
    },

    insertEvent(events, weekLength, infoWeek, index, availableDays, level) {
      const iEvent = infoWeek[index];
      if (iEvent !== undefined && iEvent.left >= availableDays) {
        // If you have space available, more events are placed
        if (iEvent.left - availableDays) {
          // It is filled with empty events
          events.push({ size: iEvent.left - availableDays });
        }
        // The event is built
        events.push({ size: iEvent.size, event: iEvent.event });

        if (level !== 0) {
          // If it goes into recursion, then the item is deleted
          infoWeek.splice(index, 1);
        }

        const currentAvailableDays = iEvent.left + iEvent.size;

        if (currentAvailableDays < weekLength) {
          const indexNextEvent = indexOf(
            infoWeek,
            (e) => e.id !== iEvent.id && e.left >= currentAvailableDays
          );

          this.insertEvent(
            events,
            weekLength,
            infoWeek,
            indexNextEvent !== -1 ? indexNextEvent : index,
            currentAvailableDays,
            level + 1
          );
        } // else: There are no more days available, end of iteration
      } else {
        events.push({ size: weekLength - availableDays });
        // end of iteration
      }
    },

    badgeClasses(computedEvent) {
      if (computedEvent.event !== undefined) {
        return {
          "my-event": true,
          "text-black": true, // Change text color to black
          /*  [`bg-${computedEvent.event.bgcolor}`]: true, */
          "rounded-border": true,
          "q-calendar__ellipsis": true,
        };
      }
      return {
        "my-void-event": true,
      };
    },

    badgeStyles(computedEvent, weekLength) {
      const s = {};
      if (computedEvent.size !== undefined) {
        s.width = (100 / weekLength) * computedEvent.size + "%";
      }
      return s;
    },

    isBetweenDatesWeek(dateStart, dateEnd, weekStart, weekEnd) {
      return (
        (dateEnd < weekEnd && dateEnd >= weekStart) ||
        dateEnd === weekEnd ||
        (dateEnd > weekEnd && dateStart <= weekEnd)
      );
    },

    onToday() {
      this.$refs.calendar.moveToToday();
    },
    onPrev() {
      this.$refs.calendar.prev();
    },
    onNext() {
      this.$refs.calendar.next();
    },
    onMoved(data) {
      console.log("onMoved", data);
    },
    onChange(data) {
      console.log("onChange", data);
    },
    onClickDate(data) {
      console.log("onClickDate", data);
    },
    onClickDay(data) {
      console.log("onClickDay", data);
    },
    onClickWorkweek(data) {
      console.log("onClickWorkweek", data);
    },
    onClickHeadDay(data) {
      console.log("onClickHeadDay", data);
    },
    onClickHeadWorkweek(data) {
      console.log("onClickHeadWorkweek", data);
    },
  },
});
</script>

<style lang="sass" scoped>
.my-event
  position: relative
  display: inline-flex
  white-space: nowrap
  font-size: 12px
  height: 16px
  max-height: 16px
  margin: 1px 0 0 0
  justify-content: center
  text-overflow: ellipsis
  overflow: hidden
  cursor: pointer

.title
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: 100%

.my-void-event
  display: inline-flex
  white-space: nowrap
  height: 1px

.text-white
  color: white

.bg-blue
  background: blue

.bg-green
  background: green

.bg-orange
  background: orange

.bg-red
  background: red

.bg-teal
  background: teal

.bg-grey
  background: grey

.bg-purple
  background: purple

.rounded-border
  border-radius: 2px
</style>
