const started = localStorage.getItem("started")

if (started == null) {
  localStorage.setItem("started", "true")
  localStorage.setItem("score", 0)
}