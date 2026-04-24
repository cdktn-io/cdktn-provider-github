# `repositoryPages` Submodule <a name="`repositoryPages` Submodule" id="@cdktn/provider-github.repositoryPages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPagesA <a name="RepositoryPagesA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages github_repository_pages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer"></a>

```python
from cdktn_provider_github import repository_pages

repositoryPages.RepositoryPagesA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository: str,
  build_type: str = None,
  cname: str = None,
  https_enforced: bool | IResolvable = None,
  id: str = None,
  public: bool | IResolvable = None,
  source: RepositoryPagesSourceA = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The repository name to configure GitHub Pages for. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.buildType">build_type</a></code> | <code>str</code> | The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.cname">cname</a></code> | <code>str</code> | The custom domain for the repository. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.httpsEnforced">https_enforced</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#id RepositoryPagesA#id}. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.public">public</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the GitHub Pages site is publicly visible. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.repository"></a>

- *Type:* str

The repository name to configure GitHub Pages for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#repository RepositoryPagesA#repository}

---

##### `build_type`<sup>Optional</sup> <a name="build_type" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.buildType"></a>

- *Type:* str

The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.cname"></a>

- *Type:* str

The custom domain for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#cname RepositoryPagesA#cname}

---

##### `https_enforced`<sup>Optional</sup> <a name="https_enforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.httpsEnforced"></a>

- *Type:* bool | cdktn.IResolvable

Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#id RepositoryPagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.public"></a>

- *Type:* bool | cdktn.IResolvable

Whether the GitHub Pages site is publicly visible.

If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#public RepositoryPagesA#public}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#source RepositoryPagesA#source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType">reset_build_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname">reset_cname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced">reset_https_enforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic">reset_public</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource"></a>

```python
def put_source(
  branch: str,
  path: str = None
) -> None
```

###### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource.parameter.branch"></a>

- *Type:* str

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#branch RepositoryPagesA#branch}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource.parameter.path"></a>

- *Type:* str

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#path RepositoryPagesA#path}

---

##### `reset_build_type` <a name="reset_build_type" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType"></a>

```python
def reset_build_type() -> None
```

##### `reset_cname` <a name="reset_cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname"></a>

```python
def reset_cname() -> None
```

##### `reset_https_enforced` <a name="reset_https_enforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced"></a>

```python
def reset_https_enforced() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_public` <a name="reset_public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic"></a>

```python
def reset_public() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct"></a>

```python
from cdktn_provider_github import repository_pages

repositoryPages.RepositoryPagesA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement"></a>

```python
from cdktn_provider_github import repository_pages

repositoryPages.RepositoryPagesA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource"></a>

```python
from cdktn_provider_github import repository_pages

repositoryPages.RepositoryPagesA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport"></a>

```python
from cdktn_provider_github import repository_pages

repositoryPages.RepositoryPagesA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RepositoryPagesA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RepositoryPagesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryPagesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus">build_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404">custom404</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId">repository_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source">source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput">build_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput">cname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput">https_enforced_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput">public_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput">source_input</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType">build_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced">https_enforced</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public">public</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `build_status`<sup>Required</sup> <a name="build_status" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus"></a>

```python
build_status: str
```

- *Type:* str

---

##### `custom404`<sup>Required</sup> <a name="custom404" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404"></a>

```python
custom404: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId"></a>

```python
repository_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source"></a>

```python
source: RepositoryPagesSourceAOutputReference
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a>

---

##### `build_type_input`<sup>Optional</sup> <a name="build_type_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput"></a>

```python
build_type_input: str
```

- *Type:* str

---

##### `cname_input`<sup>Optional</sup> <a name="cname_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput"></a>

```python
cname_input: str
```

- *Type:* str

---

##### `https_enforced_input`<sup>Optional</sup> <a name="https_enforced_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput"></a>

```python
https_enforced_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `public_input`<sup>Optional</sup> <a name="public_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput"></a>

```python
public_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput"></a>

```python
source_input: RepositoryPagesSourceA
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `build_type`<sup>Required</sup> <a name="build_type" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType"></a>

```python
build_type: str
```

- *Type:* str

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `https_enforced`<sup>Required</sup> <a name="https_enforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced"></a>

```python
https_enforced: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public"></a>

```python
public: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPagesAConfig <a name="RepositoryPagesAConfig" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.Initializer"></a>

```python
from cdktn_provider_github import repository_pages

repositoryPages.RepositoryPagesAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository: str,
  build_type: str = None,
  cname: str = None,
  https_enforced: bool | IResolvable = None,
  id: str = None,
  public: bool | IResolvable = None,
  source: RepositoryPagesSourceA = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository">repository</a></code> | <code>str</code> | The repository name to configure GitHub Pages for. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType">build_type</a></code> | <code>str</code> | The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname">cname</a></code> | <code>str</code> | The custom domain for the repository. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced">https_enforced</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#id RepositoryPagesA#id}. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public">public</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the GitHub Pages site is publicly visible. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository name to configure GitHub Pages for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#repository RepositoryPagesA#repository}

---

##### `build_type`<sup>Optional</sup> <a name="build_type" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType"></a>

```python
build_type: str
```

- *Type:* str

The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname"></a>

```python
cname: str
```

- *Type:* str

The custom domain for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#cname RepositoryPagesA#cname}

---

##### `https_enforced`<sup>Optional</sup> <a name="https_enforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced"></a>

```python
https_enforced: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#id RepositoryPagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public"></a>

```python
public: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the GitHub Pages site is publicly visible.

If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#public RepositoryPagesA#public}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source"></a>

```python
source: RepositoryPagesSourceA
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#source RepositoryPagesA#source}

---

### RepositoryPagesSourceA <a name="RepositoryPagesSourceA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.Initializer"></a>

```python
from cdktn_provider_github import repository_pages

repositoryPages.RepositoryPagesSourceA(
  branch: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch">branch</a></code> | <code>str</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path">path</a></code> | <code>str</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch"></a>

```python
branch: str
```

- *Type:* str

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#branch RepositoryPagesA#branch}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path"></a>

```python
path: str
```

- *Type:* str

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#path RepositoryPagesA#path}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesSourceAOutputReference <a name="RepositoryPagesSourceAOutputReference" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer"></a>

```python
from cdktn_provider_github import repository_pages

repositoryPages.RepositoryPagesSourceAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue"></a>

```python
internal_value: RepositoryPagesSourceA
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---



