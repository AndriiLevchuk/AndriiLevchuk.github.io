$(function(){
    /*
     * For the sake keeping the code clean and the examples simple this file
     * contains only the plugin configuration & callbacks.
     *
     * UI functions ui_* can be located in:
     *   - assets/demo/uploader/js/ui-main.js
     *   - assets/demo/uploader/js/ui-multiple.js
     *   - assets/demo/uploader/js/ui-single.js
     */
    $('#drag-and-drop-zone').dmUploader({ //
        url: '/demo/java-script/upload',
        maxFileSize: 3000000, // 3 Megs max
        auto: false,
        queue: true,
        onDragEnter: function(){
            // Happens when dragging something over the DnD area
            this.addClass('active');
        },
        onDragLeave: function(){
            // Happens when dragging something OUT of the DnD area
            this.removeClass('active');
        },
        onInit: function(){
            // Plugin is ready to use
            ui_add_log('Penguin initialized :)', 'info');
        },
        onComplete: function(){
            // All files in the queue are processed (success or error)
            ui_add_log('All pending tranfers finished');
        },
        onNewFile: function(id, file){
            // When a new file is added using the file selector or the DnD area
            ui_add_log('New file added #' + id);
            ui_multi_add_file(id, file);
        },
        onBeforeUpload: function(id){
            // about tho start uploading a file
            ui_add_log('Starting the upload of #' + id);
            ui_multi_update_file_status(id, 'uploading', 'Uploading...');
            ui_multi_update_file_progress(id, 0, '', true);
        },
        onUploadProgress: function(id, percent){
            // Updating file progress
            ui_multi_update_file_progress(id, percent);
        },
        onUploadSuccess: function(id, data){
            // A file was successfully uploaded
            ui_add_log('Server Response for file #' + id + ': ' + JSON.stringify(data));
            ui_add_log('Upload of file #' + id + ' COMPLETED', 'success');
            ui_multi_update_file_status(id, 'success', 'Upload Complete');
            ui_multi_update_file_progress(id, 100, 'success', false);
        },
        onUploadCanceled: function(id) {
            ui_multi_update_file_status(id, 'warning', 'Canceled by User');
            ui_multi_update_file_progress(id, 0, 'warning', false);
            ui_multi_update_file_controls(id, true, false);
        },
        onUploadError: function(id, xhr, status, message){
            ui_multi_update_file_status(id, 'danger', message);
            ui_multi_update_file_progress(id, 0, 'danger', false);
        },
        onFallbackMode: function(){
            // When the browser doesn't support this plugin :(
            ui_add_log('Plugin cant be used here, running Fallback callback', 'danger');
        },
        onFileSizeError: function(file){
            ui_add_log('File \'' + file.name + '\' cannot be added: size excess limit', 'danger');
        }
    });

    /*
      Global controls
    */
    $('#btnApiStart').on('click', function(evt){
        evt.preventDefault();

        $('#drag-and-drop-zone').dmUploader('start');
    });

    $('#btnApiCancel').on('click', function(evt){
        evt.preventDefault();

        $('#drag-and-drop-zone').dmUploader('cancel');
    });
    $('#close').on('click', function (evt) {
        $("#drag-and-drop-zone").dmUploader("destroy");
    });
});

// Creates a new file and add it to our list
function ui_multi_add_file(id, file)
{
    var template = $('#files-template').text();
    template = template.replace('%%filename%%', file.name);

    template = $(template);
    template.prop('id', 'uploaderFile' + id);
    template.data('file-id', id);

    $('#files').find('li.empty').fadeOut(); // remove the 'no files yet'
    $('#files').prepend(template);
}

// Changes the status messages on our list
function ui_multi_update_file_status(id, status, message)
{
    $('#uploaderFile' + id).find('span').html(message).prop('class', 'status text-' + status);
}

// Updates a file progress, depending on the parameters it may animate it or change the color.
function ui_multi_update_file_progress(id, percent, color, active)
{
    color = (typeof color === 'undefined' ? false : color);
    active = (typeof active === 'undefined' ? true : active);

    var bar = $('#uploaderFile' + id).find('div.progress-bar');

    bar.width(percent + '%').attr('aria-valuenow', percent);
    bar.toggleClass('progress-bar-striped progress-bar-animated', active);

    if (percent === 0){
        bar.html('');
    } else {
        bar.html(percent + '%');
    }

    if (color !== false){
        bar.removeClass('bg-success bg-info bg-warning bg-danger');
        bar.addClass('bg-' + color);
    }
}

// Toggles the disabled status of Star/Cancel buttons on one particual file
function ui_multi_update_file_controls(id, start, cancel, wasError)
{
    wasError = (typeof wasError === 'undefined' ? false : wasError);

    $('#uploaderFile' + id).find('button.start').prop('disabled', !start);
    $('#uploaderFile' + id).find('button.cancel').prop('disabled', !cancel);

    if (!start && !cancel) {
        $('#uploaderFile' + id).find('.controls').fadeOut();
    } else {
        $('#uploaderFile' + id).find('.controls').fadeIn();
    }

    if (wasError) {
        $('#uploaderFile' + id).find('button.start').html('Retry');
    }
}
