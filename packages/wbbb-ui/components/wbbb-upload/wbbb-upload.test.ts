import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import WbbbUpload from './wbbb-upload.vue'

describe('WbbbUpload cancellation', () => {
  it('aborts an injected uploader when an active upload is cancelled', async () => {
    let signal: AbortSignal | undefined
    let resolveUpload: ((file: { path: string }) => void) | undefined
    ;(globalThis as { uni?: unknown }).uni = {
      chooseImage: ({ success }: { success: (result: { tempFilePaths: string[] }) => void }) => success({ tempFilePaths: ['temp.png'] })
    }

    const wrapper = mount(WbbbUpload, {
      props: {
        uploader: (_file, options) => new Promise((resolve) => {
          signal = options?.signal
          resolveUpload = resolve
        })
      }
    })

    await wrapper.find('.wbbb-upload__trigger').trigger('tap')
    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))
    const active = wrapper.find('.wbbb-upload__item--uploading')
    expect(active.exists()).toBe(true)
    await active.trigger('tap')
    expect(signal?.aborted).toBe(true)
    resolveUpload?.({ path: 'temp.png' })
    wrapper.unmount()
  })
})
