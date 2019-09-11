class Github {
  constructor() {
    this.client_id = 'df7476b623658c3c0764';
    this.client_secret = '745d5f47260d7900f7452cf163e76e37468bc46d';
  }

  async getUser(user) {
    // wait and get response from github api
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // wait and get repos from github api
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // store the data/json to the profile variable
    const profile = await profileResponse.json();
    
    const repos = await repoResponse.json();

    return {
      profile,  // = profile: profile
      repos     // = repos: repos
    }
  }
}