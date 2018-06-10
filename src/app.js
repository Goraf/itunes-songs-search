class SearchApp {
  constructor() {
    [this.searchInput] = document.getElementsByClassName("search-form__input");
    [this.resultSummary] = document.getElementsByClassName("search-results__summary");
    [this.songsList] = document.getElementsByClassName("songs");

    const [form] = document.getElementsByClassName("search-form");
    form.addEventListener("submit", e => this.processInput(e));
  }

  processInput(event) {
    event.preventDefault();

    const searchQuery = this.searchInput.value.trim();
    if (!searchQuery) {
      window.alert("Input cannot be empty.");
      this.searchInput.value = "";
      return;
    }
  }
}

window.addEventListener("DOMContentLoaded", () => new SearchApp());
