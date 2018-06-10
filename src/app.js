const config = {
  server: "https://itunes.apple.com/search?",
  searchResultLimit: 100,
  songsPerPage: 9
};

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

    this.searchSong(searchQuery);
    this.searchInput.value = "";
  }

  searchSong(searchQuery) {
    this.callITunesApi(searchQuery)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  callITunesApi(searchQuery) {
    const term = searchQuery.replace(/\s+/g, "+");
    const url = encodeURI(`${config.server}term=${term}&country=US&media=music&entity=song&limit=${config.searchResultLimit}`);

    return fetch(url);
  }
}

window.addEventListener("DOMContentLoaded", () => new SearchApp());
