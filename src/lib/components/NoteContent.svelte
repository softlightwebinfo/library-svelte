<script lang="ts">
	export let value = '';
</script>

<div data-testid="NoteContent" class={'NoteContent'} style={$$props.style ?? ''}>
	<textarea bind:value />
</div>

<style lang="scss">
	.NoteContent {
		textarea {
			display: block;
			width: 100%;
			font-size: 12px;
			line-height: 1.32857143;
			color: #555;
			border-radius: 3px;
			-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 8%);
			-webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
			-o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
			transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
			box-shadow: none;
			outline: 0 !important;
			border: none;
			background: url(data:@file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA0CAYAAABLolKXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjEyMkJFRjcwNjUxMUUzQkU2MkJGQzhCNkVBQTU1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjEyMkJGMDcwNjUxMUUzQkU2MkJGQzhCNkVBQTU1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMTIyQkVENzA2NTExRTNCRTYyQkZDOEI2RUFBNTUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyMTIyQkVFNzA2NTExRTNCRTYyQkZDOEI2RUFBNTUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sZ1RrAAAABxJREFUeNpi+P//PwMTAxCMOOLV09Ng1n+AAAMATeUG/f7FJ+gAAAAASUVORK5CYII=) left top;
			background-attachment: local;
			min-height: 780px;
			font: 14px/52px 'Helvetica Neue', Helvetica, 'Noto Sans', sans-serif, serif;
			max-height: 1500px;
			padding-left: 125px;
			padding-right: 50px;
			overflow: hidden;
			overflow-wrap: break-word;
			resize: horizontal;
		}

		&::after {
			display: block;
			content: '';
			position: absolute;
			left: 95px;
			top: 0;
			bottom: 0;
			background: #f9d4d1;
			width: 1px;
		}
	}
</style>
