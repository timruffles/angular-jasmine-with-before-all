angular.module("main", [])
.value("someService", {
  question: function() {
    return 42; 
  },
})
.value("stubMe", {
  service: "not stubbed",
})

