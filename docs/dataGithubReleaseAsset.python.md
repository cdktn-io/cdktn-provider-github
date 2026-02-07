# `dataGithubReleaseAsset` Submodule <a name="`dataGithubReleaseAsset` Submodule" id="@cdktn/provider-github.dataGithubReleaseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubReleaseAsset <a name="DataGithubReleaseAsset" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset github_release_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer"></a>

```python
from cdktn_provider_github import data_github_release_asset

dataGithubReleaseAsset.DataGithubReleaseAsset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_id: typing.Union[int, float],
  owner: str,
  repository: str,
  download_file_contents: bool | IResolvable = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.assetId">asset_id</a></code> | <code>typing.Union[int, float]</code> | ID of the release asset to retrieve. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Owner of the repository. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Name of the repository to retrieve the release asset from. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.downloadFileContents">download_file_contents</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to download the asset file content into the `file_contents` attribute. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.assetId"></a>

- *Type:* typing.Union[int, float]

ID of the release asset to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.owner"></a>

- *Type:* str

Owner of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.repository"></a>

- *Type:* str

Name of the repository to retrieve the release asset from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}

---

##### `download_file_contents`<sup>Optional</sup> <a name="download_file_contents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.downloadFileContents"></a>

- *Type:* bool | cdktf.IResolvable

Whether to download the asset file content into the `file_contents` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetDownloadFileContents">reset_download_file_contents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_download_file_contents` <a name="reset_download_file_contents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetDownloadFileContents"></a>

```python
def reset_download_file_contents() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct"></a>

```python
from cdktn_provider_github import data_github_release_asset

dataGithubReleaseAsset.DataGithubReleaseAsset.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement"></a>

```python
from cdktn_provider_github import data_github_release_asset

dataGithubReleaseAsset.DataGithubReleaseAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource"></a>

```python
from cdktn_provider_github import data_github_release_asset

dataGithubReleaseAsset.DataGithubReleaseAsset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport"></a>

```python
from cdktn_provider_github import data_github_release_asset

dataGithubReleaseAsset.DataGithubReleaseAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubReleaseAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubReleaseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubReleaseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl">browser_download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents">file_contents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput">asset_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput">download_file_contents_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId">asset_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents">download_file_contents</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `browser_download_url`<sup>Required</sup> <a name="browser_download_url" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl"></a>

```python
browser_download_url: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `file_contents`<sup>Required</sup> <a name="file_contents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents"></a>

```python
file_contents: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput"></a>

```python
asset_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `download_file_contents_input`<sup>Optional</sup> <a name="download_file_contents_input" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput"></a>

```python
download_file_contents_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId"></a>

```python
asset_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `download_file_contents`<sup>Required</sup> <a name="download_file_contents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents"></a>

```python
download_file_contents: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubReleaseAssetConfig <a name="DataGithubReleaseAssetConfig" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.Initializer"></a>

```python
from cdktn_provider_github import data_github_release_asset

dataGithubReleaseAsset.DataGithubReleaseAssetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_id: typing.Union[int, float],
  owner: str,
  repository: str,
  download_file_contents: bool | IResolvable = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId">asset_id</a></code> | <code>typing.Union[int, float]</code> | ID of the release asset to retrieve. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner">owner</a></code> | <code>str</code> | Owner of the repository. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository">repository</a></code> | <code>str</code> | Name of the repository to retrieve the release asset from. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents">download_file_contents</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to download the asset file content into the `file_contents` attribute. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId"></a>

```python
asset_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ID of the release asset to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Owner of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Name of the repository to retrieve the release asset from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}

---

##### `download_file_contents`<sup>Optional</sup> <a name="download_file_contents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents"></a>

```python
download_file_contents: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether to download the asset file content into the `file_contents` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



