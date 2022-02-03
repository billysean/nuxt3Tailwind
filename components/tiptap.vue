<template>
  <editor-content :editor="editor" />
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>Type Here !</p>',
  extensions: [
    StarterKit.configure({
        heading:{
            levels:[1,2,3]
        }
    }),
  ],
})
</script>