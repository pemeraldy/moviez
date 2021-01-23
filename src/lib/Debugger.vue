<template>
  <div
    draggable
    v-if="isDev"
    class="h-64 w-96 overflow-y-scroll resize cursor-pointer select-none text-gray-100 fixed top-24 font-mono text-xs break-words py-5 px-4  right-2 bg-gray-600 "
    @click="onResize"
    ref="toolRef"
    @dragstart="handleDragStart"
    @dragend="handleDragEnd"
  >
    <pre>
            <slot/>
          </pre>
  </div>
</template>

<script>
import { onMounted, reactive, ref, watchEffect } from "vue";
const HEIGHT = "DT_HEIGHT";
const WIDTH = "DT_WIDTH";
export default {
  setup() {
    const isDev = ref("development" === process.env.NODE_ENV);
    const toolRef = ref(null);

    function onResize(e) {
      localStorage.setItem(HEIGHT, e.target.clientHeight);
      localStorage.setItem(WIDTH, e.target.clientWidth);
    }
    onMounted(() => {
      const tool = toolRef.value;
      if (!tool) {
        return;
      }
      tool.style.height = "" + localStorage.getItem(HEIGHT) + `px`;
      tool.style.width = "" + localStorage.getItem(WIDTH) + `px`;
    });
    const startPosition = reactive({ x: 0, y: 0 });
    const currentPosition = reactive({ x: 0, y: 0 });

    function handleMouseDown(e) {
      startPosition.x = e.clientX;
      startPosition.y = e.clientY;
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    function handleMouseUp() {
      startPosition.x = startPosition.y = 0;
      currentPosition.x = currentPosition.y = 0;
      console.log(`Detroying mouse move`);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      const tool = toolRef.value;
      if (!tool) {
        return;
      }
      tool.style.top = `${currentPosition.y - startPosition.y || 0}px`;
    }
    function handleMouseMove(e) {
      currentPosition.x = e.clientX;
      currentPosition.y = e.clientY;
      console.log(
        currentPosition.x - startPosition.x,
        currentPosition.y - startPosition.y
      );
    }

    const handleDragStart = handleMouseDown;
    const handleDragEnd = handleMouseUp;

    watchEffect(() => {
      const tool = toolRef.value;
      if (!tool) {
        return;
      }
      tool.style.top = `${currentPosition.y - startPosition.y || 0}px`;
      // tool.style.left = `${currentPosition.x - startPosition.x || 0}px`;
    });

    return {
      isDev,
      onResize,
      toolRef,
      handleMouseDown,
      handleMouseUp,
      handleMouseMove,
      handleDragStart,
      handleDragEnd,
    };
  },
};
</script>

<style></style>
