export interface ProfileInfo {
      id: string
      name: string
      username: string
      coverPhoto: string
      profilePhoto: string
      bio: string
      location: string
      work: string
      education: string
      relationship: string
      joinedDate: string
      followers: number
      following: number
      friendsCount: number
      friends: Friend[]
}

export interface Friend {
      id: string
      name: string
      avatar: string
      mutualFriends?: number
}

export const profileData: ProfileInfo = {
      id: "123456789",
      name: "Jean Dupont",
      username: "jean.dupont",
      coverPhoto: "/placeholder.svg?height=400&width=1200",
      profilePhoto: "https://github.com/shadcn.png",
      bio: "Passionné de photographie et de voyages. Toujours à la recherche de nouvelles aventures.",
      location: "Paris, France",
      work: "Designer chez Creative Studio",
      education: "Université Paris-Sorbonne",
      relationship: "En couple",
      joinedDate: "Membre depuis janvier 2015",
      followers: 1250,
      following: 450,
      friendsCount: 328,
      friends: [
            {
                  id: "1",
                  name: "Marie Lefebvre",
                  avatar: "/placeholder.svg?height=100&width=100",
                  mutualFriends: 15,
            },
            {
                  id: "2",
                  name: "Thomas Martin",
                  avatar: "/placeholder.svg?height=100&width=100",
                  mutualFriends: 8,
            },
            {
                  id: "3",
                  name: "Sophie Bernard",
                  avatar: "/placeholder.svg?height=100&width=100",
                  mutualFriends: 12,
            },
            {
                  id: "4",
                  name: "Lucas Petit",
                  avatar: "/placeholder.svg?height=100&width=100",
                  mutualFriends: 5,
            },
            {
                  id: "5",
                  name: "Emma Dubois",
                  avatar: "/placeholder.svg?height=100&width=100",
                  mutualFriends: 20,
            },
            {
                  id: "6",
                  name: "Hugo Moreau",
                  avatar: "/placeholder.svg?height=100&width=100",
                  mutualFriends: 3,
            },
      ],
}

