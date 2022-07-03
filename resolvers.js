let posts = [
  {
    id: "1",
    title: "The Awakening",
    text: "Kate Chopin",
  },
  {
    id: "2",
    title: "City of Glass",
    text: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    posts: () => posts,
    post: (_, {id}) => posts.find((item) => item.id == id)
  },
  Mutation: {
    addPost(_, {id, title, text}) {
        let post = {id, title, text};
        posts.push(post);
        return posts;
    },
    updatePost(_, {id, title, text}) {
        let postIndex = posts.findIndex((item) => item.id == id);
        let post = {id, title, text};
        posts[postIndex] = post;
        return posts;
    },
    deletePost(_, {id}) {
        posts = posts.filter(item => item.id != id)
        return posts;
    }
  }
};

module.exports = resolvers;
