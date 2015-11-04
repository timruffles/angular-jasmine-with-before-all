angular.module("main", [])
.factory("someService", function() {
  return {
    question: function() {
      return 42; 
    },
  }
})
.value("stubMe", {
  service: "not stubbed",
})

