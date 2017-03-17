import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    tweet: () => Relay.QL`
        query TwitterAPI{
		 search(q:"trump", count: 1000){
		  	tweet{
		      id,
		      user {
		        id,
		        followers_count,
		        tweets(limit:5) {
		          retweet_count
		        }
		      }
		    }
			}
		}
    `,
  };
  static routeName = 'AppHomeRoute';
}
