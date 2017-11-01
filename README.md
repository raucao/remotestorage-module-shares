[![npm](https://img.shields.io/npm/v/remotestorage-module-shares.svg)](https://www.npmjs.com/package/remotestorage-module-shares)

<a name="module_shares"></a>

## shares
A remoteStorage data module for sharing of files.

All shares are stored with a timestamp prefix. For images, thumbnails are
created and stored in a subdirectory.


* [shares](#module_shares)
    * [storeFile(mimeType, name, data)](#exp_module_shares--storeFile) ⇒ <code>Promise</code> ⏏
    * [remove(name)](#exp_module_shares--remove) ⏏
    * [list()](#exp_module_shares--list) ⇒ <code>Promise</code> ⏏
    * [getFileURL(name)](#exp_module_shares--getFileURL) ⇒ <code>string</code> ⏏

<a name="exp_module_shares--storeFile"></a>

### storeFile(mimeType, name, data) ⇒ <code>Promise</code> ⏏
Stores a shared file

**Kind**: Exported function  
**Returns**: <code>Promise</code> - A promise, which will be fulfilled with the absolute
                   URL of the newly uploaded file (see <getFileURL>)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| mimeType | <code>string</code> | Content type of the file |
| name | <code>string</code> | Filename |
| data | <code>ArrayBuffer</code> | File contents |

**Example**  
```js
remoteStorage.shares.storeFile(mimeType, filename, content)
  .then((url) => { console.log(`successfully stored file at ${url}`)
```
<a name="exp_module_shares--remove"></a>

### remove(name) ⏏
Remove a file

**Kind**: Exported function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The filename |

<a name="exp_module_shares--list"></a>

### list() ⇒ <code>Promise</code> ⏏
List all shared files

**Kind**: Exported function  
**Returns**: <code>Promise</code> - Resolves with an array containing the filenames  
**Access**: public  
<a name="exp_module_shares--getFileURL"></a>

### getFileURL(name) ⇒ <code>string</code> ⏏
Get the absolute URL of a file.

**Kind**: Exported function  
**Returns**: <code>string</code> - The absolute URL of the file  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the filename |

