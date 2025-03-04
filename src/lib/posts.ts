export interface Comment {
      id: number
      user: string
      content: string
      time: string
}

export interface Post {
      id: number
      user: string
      time: string
      content: string
      likes: number
      comments: Comment[]
}

export const posts: Post[] = [
      {
            id: 1,
            user: "Utilisateur 1",
            time: "Il y a 1 heure",
            content: "Voici un exemple de publication sur Facebook !",
            likes: 15,
            comments: [
                  {
                        id: 1,
                        user: "Marie",
                        content: "Super photo !",
                        time: "Il y a 30 minutes",
                  },
                  {
                        id: 2,
                        user: "Thomas",
                        content: "J'adore !",
                        time: "Il y a 15 minutes",
                  },
                  {
                        id: 3,
                        user: "Sophie",
                        content: "Magnifique !",
                        time: "Il y a 5 minutes",
                  },
            ],
      },
      {
            id: 2,
            user: "Utilisateur 2",
            time: "Il y a 2 heures",
            content: "Voici un exemple de publication sur Facebook !",
            likes: 15,
            comments: [],
      },
      {
            id: 3,
            user: "Utilisateur 3",
            time: "Il y a 3 heures",
            content: "Voici un exemple de publication sur Facebook !",
            likes: 15,
            comments: [
                  {
                        id: 1,
                        user: "Pierre",
                        content: "Très intéressant !",
                        time: "Il y a 1 heure",
                  },
            ],
      },
      {
            id: 4,
            user: "Utilisateur 3",
            time: "Il y a 3 heures",
            content: "Voici un exemple de publication sur Facebook !",
            likes: 15,
            comments: [
                  {
                        id: 1,
                        user: "Pierre",
                        content: "Très intéressant !",
                        time: "Il y a 1 heure",
                  },
            ],
      },
]

