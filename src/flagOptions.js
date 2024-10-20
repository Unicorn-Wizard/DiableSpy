const args = require('args');

const flagOptions = () => {
  // args
  //   .option(['r', 'userrecon'], 'username reconnaissance')
  //   .option(['m', 'mailfinder'], 'Finds email addresss by name')
  //   .option(['u', 'useragent'], 'find browser info')
  //   .option(['w', 'whoislookup'], "find doamin's whois info")
  //   .option(['i', 'instaRecon'], 'find Instagram users info')
  //   .option(['p', 'iplookup'], 'find IP info')
  //   .option(['t', 'portscan'], 'find open ports')
  //   .option(['d', 'domainage'], 'find website Age')
  //   .option(['e', 'headerinfo'], 'find website headers')
  //   .option(['n', 'dnslookup'], 'domain name system lookup')
  //   .option(['g', 'gitrecon'], 'find github user info')
  //   .option(['s', 'subdomain'], 'find subdomains of website')
  //   .option(['x', 'exif'], 'extracts Exif metadata from image')
  //   .option(['a', 'webscan'], 'analyze suspicious URLs')
  //   .option(['l', 'urlexpand'], 'long url of shorten URL')
  //   .option(['c', 'subdomainrecon'], 'find subdomains passively')
  //   .option(['y', 'youtubelookup'], 'find video metadata');

  args.option(['r', 'userrecon'], 'username search across  social media to gather  user information.')
    .option(['m', 'mailfinder'], 'email address search associated with a specific username or domain.')
    .option(['u', 'useragent'], 'browser and device identification being used by a user.')
    .option(['w', 'whoislookup'], 'find registration information for a specific domain.')
    .option(['i', 'instaRecon'], 'gather information on an Instagram user, such as their posts, followers, and more.')
    .option(['p', 'iplookup'], 'find information on a specific IP address, such as its location and hostname.')
    .option(['t', 'portscan'], 'open port search.')
    .option(['d', 'domainage'], 'registration age of domain and how active')
    .option(['e', 'headerinfo'], 'analysis of HTTP headers of a website.')
    .option(['n', 'dnslookup'], 'view DNS records for a specific domain and see how it is configured.')
    .option(['g', 'gitrecon'], 'GitHub user information, such as their repositories, contributions, and more.')
    .option(['s', 'subdomain'], 'find and enumerate the subdomains of a  website.')
    .option(['x', 'exif'], 'Exif metadata extraction from images.')
    .option(['a', 'webscan'], 'analysis of suspicious URLs.')
    .option(['l', 'urlexpand'], 'expand URLs and destination.')
    .option(['y', 'youtubelookup'], 'metadata of YouTube videos.');

  args
    .example('diablespy -r YOUR_USERNAME', 'This command will search for the given username on multiple social media platforms.')
    .example('diablespy -w google.com', 'This command will find registration information for the given domain.')
    .example('diablespy -i therock', 'This command will gather information on the given Instagram user.')
    .example('diablespy -p 8.8.8.8', 'This command will find information on the given IP address.')
    .example('diablespy -d google.com', 'This command will find out how long the given website has been registered and active.');

  // args.parse(process.argv, { mainColor: ['cyan'] });
};
module.exports = flagOptions;
