//DO NOT CHANGE THIS FILE FOR ANY REASON 
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Follow: {
        Row: {
          follow_id: number
          followee_id: number
          follower_id: number
        }
        Insert: {
          follow_id?: number
          followee_id: number
          follower_id: number
        }
        Update: {
          follow_id?: number
          followee_id?: number
          follower_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Follow_followee_id_fkey"
            columns: ["followee_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "Follow_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["user_id"]
          },
        ]
      }
      Like: {
        Row: {
          content_id: number
          like_id: number
          user_id: number
        }
        Insert: {
          content_id: number
          like_id?: number
          user_id: number
        }
        Update: {
          content_id?: number
          like_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Like_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "Post"
            referencedColumns: ["content_id"]
          },
          {
            foreignKeyName: "Like_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["user_id"]
          },
        ]
      }
      Media: {
        Row: {
          content_id: number
          is_post: boolean
          media_id: number
          media_url: string
        }
        Insert: {
          content_id: number
          is_post: boolean
          media_id?: number
          media_url: string
        }
        Update: {
          content_id?: number
          is_post?: boolean
          media_id?: number
          media_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "Media_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "Post"
            referencedColumns: ["content_id"]
          },
        ]
      }
      Post: {
        Row: {
          content: string
          content_id: number
          date_created: string
          is_deleted: boolean
          is_post: boolean
          modified_at: string | null
          parent_id: number | null
          user_id: number
          was_modified: boolean
        }
        Insert: {
          content: string
          content_id?: number
          date_created: string
          is_deleted: boolean
          is_post: boolean
          modified_at?: string | null
          parent_id?: number | null
          user_id: number
          was_modified: boolean
        }
        Update: {
          content?: string
          content_id?: number
          date_created?: string
          is_deleted?: boolean
          is_post?: boolean
          modified_at?: string | null
          parent_id?: number | null
          user_id?: number
          was_modified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "Content_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "Post"
            referencedColumns: ["content_id"]
          },
        ]
      }
      Share: {
        Row: {
          content_id: number
          share_id: number
          user_id: number
        }
        Insert: {
          content_id: number
          share_id?: number
          user_id: number
        }
        Update: {
          content_id?: number
          share_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Share_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "Post"
            referencedColumns: ["content_id"]
          },
          {
            foreignKeyName: "Share_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["user_id"]
          },
        ]
      }
      User: {
        Row: {
          bio: string | null
          date_created: string
          email: string
          email_notifications: boolean
          handle: string
          is_public: boolean
          password: string
          phone: string | null
          profile_picture: string | null
          user_id: number
          username: string
        }
        Insert: {
          bio?: string | null
          date_created: string
          email: string
          email_notifications: boolean
          handle: string
          is_public: boolean
          password: string
          phone?: string | null
          profile_picture?: string | null
          user_id?: number
          username: string
        }
        Update: {
          bio?: string | null
          date_created?: string
          email?: string
          email_notifications?: boolean
          handle?: string
          is_public?: boolean
          password?: string
          phone?: string | null
          profile_picture?: string | null
          user_id?: number
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
